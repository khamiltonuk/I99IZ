import { IS_DONTENUM_BUGGY } from './../core/constants'
import CHECKERS from './../core/checkers'
import $A from './../funcs/$A'

import SHARED from './../core/shared'


// TODO: go on
const Class = (function () {

    function subclass() { };

    function create() {
        var parent = null,
            properties = $A(arguments);
        if (CHECKERS.isFunction(properties[0]))
            parent = properties.shift();

        function klass() {
            this.initialize.apply(this, arguments);
        }

        SHARED.mixin(klass, Class.Methods);
        klass.superclass = parent;
        klass.subclasses = [];

        if (parent) {
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
            parent.subclasses.push(klass);
        }

        for (var i = 0, length = properties.length; i < length; i++)
            klass.addMethods(properties[i]);

        if (!klass.prototype.initialize)
            klass.prototype.initialize = Prototype.emptyFunction;

        klass.prototype.constructor = klass;
        return klass;
    }

    function addMethods(source) {
        var ancestor = this.superclass && this.superclass.prototype,
            properties = Object.keys(source);

        if (IS_DONTENUM_BUGGY) {
            if (source.toString != Object.prototype.toString)
                properties.push("toString");
            if (source.valueOf != Object.prototype.valueOf)
                properties.push("valueOf");
        }

        for (var i = 0, length = properties.length; i < length; i++) {
            var property = properties[i],
                value = source[property];
            if (ancestor && CHECKERS.isFunction(value) &&
                value.argumentNames()[0] == "$super") {
                var method = value;
                value = (function (m) {
                    return function () {
                        return ancestor[m].apply(this, arguments);
                    };
                })(property).wrap(method);

                value.valueOf = (function (method) {
                    return function () {
                        return method.valueOf.call(method);
                    };
                })(method);

                value.toString = (function (method) {
                    return function () {
                        return method.toString.call(method);
                    };
                })(method);
            }
            this.prototype[property] = value;
        }

        return this;
    }

    return {
        create,
        Methods: {
            addMethods
        }
    };
})();

export default Class;