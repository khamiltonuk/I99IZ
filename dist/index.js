'use strict';
/*
siggi
0.0.0 (build: 39)
size: ~5.77KB
*/
(function(CTX) {
    CTX.I99IZ = {};
    var NS = CTX.I99IZ;
    /*
    [Malta] core/shared.js
    */
    
    var shared = (function () {
        function extend(destination, source) {
            for (var property in source)
                destination[property] = source[property];
            return destination;
        }
        return {
            extend: extend
        }
    })();
    
    
    /*
    [Malta] protos/require.js
    */
    /*
    [Malta] protos/Array.js
    */
    NS.Array = (function () {
        
        return {
            from: NS.$A
        }
    })();
    /*
    [Malta] protos/Date.js
    */
    NS.Date = (function () {
        return +new Date
    })();
    /*
    [Malta] protos/Element.js
    */
    NS.Element = (function () {
        
    })();
    /*
    [Malta] protos/Event.js
    */
    NS.Event = (function () {
        
    })();
    /*
    [Malta] protos/Number.js
    */
    NS.Number = (function () {
        
    })();
    /*
    [Malta] protos/Object.js
    */
    NS.Object = (function () {
        
    })();
    /*
    [Malta] protos/RegExp.js
    */
    NS.RegExp = (function () {
        
    })();
    /*
    [Malta] protos/String.js
    */
    NS.String = (function () {
        // TODO: original version
        function interpret(str) {
            return str == null ? '' : String(str); 
        }
        // TODO: original version
        function blank(str) {
            return /^\s*$/.test(str);
        }
        // TODO: original version
        function camelize(str) {
            return str.replace(/-+(.)?/g, function(_, chr) {
                return chr ? chr.toUpperCase() : '';
            });
        }
    
        // TODO: original version
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
        }
        // TODO: original version
        function dasherize(str) {
            return str.replace(/_/g, '-');
        }
        // TODO: original version
        function empty(str) {
            // not being triple here allows new String('') to return true here
            return str == '';
        }
        return  {
            interpret: interpret,
            blank: blank,
            camelize: camelize,
            capitalize: capitalize,
            dasherize: dasherize
            empty: empty
        }
    })();
    /*
    [Malta] funcs/require.js
    */
    /*
    [Malta] funcs/$.js
    */
    NS.$ = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] funcs/$$.js
    */
    NS.$$ = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] funcs/$F.js
    */
    NS.$F = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] funcs/$A.js
    */
    NS.$A = function (iterable) {
        if (!iterable) return [];
        // if 
        // SUSPENDED: uses String.toArray
    }
    /*
    [Malta] funcs/$H.js
    */
    NS.$H = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] funcs/$R.js
    */
    NS.$R = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] funcs/$w.js
    */
    NS.$w = function (sel) {
        return document.getEelementById(sel)
    }
    /*
    [Malta] objects/require.js
    */
    /*
    [Malta] objects/Prototype/index.js
    */
    NS.Prototype = {
        ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
        JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
        emptyFunction: function() { },
        K: function(x) { return x },
        Version: "0.0.0"
    };
    
    
    /*
    [Malta] objects/Prototype/Browser.js
    */
    NS.Prototype.Browser = (function (){
        var ua = navigator.userAgent,
            isOpera = window.opera && opera.toString() == "[object Opera]";
        return {
            /* opera has both attachEvent / addEventListener
            */
            IE: !!window.attachEvent && !isOpera,
            opera: isOpera,
            WebKit: ua.indexOf('AppleWebKit/') > -1, 
            Gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
            MobileSafari:   /Apple.*Mobile/.test(ua)
            // we coudl consider to add more: iPad, iPhone */
        };
    })();
    /*
    [Malta] objects/Prototype/BrowserFeatures.js
    */
    NS.Prototype.BrowserFeatures = {
        XPath: !!document.evaluate,
        SelectorsAPI: !!document.querySelector,
        ElementExtensions: (function() {
            var constructor = window.Element || window.HTMLElement;
            return !!(constructor && constructor.prototype);
        })(),
        SpecificElementExtensions: (function() {
            if (typeof window.HTMLDivElement !== 'undefined') return true;
            var div = document.createElement('div'),
                form = document.createElement('form'),
                isSupported = false;
      
            div.__proto__
            && (div.__proto__ !== form.__proto__)
            && (isSupported = true);
      
            div = form = null;
      
            return isSupported;
        })()
    };
    /*
    [Malta] objects/Prototype/Selector.js
    */
    NS.Prototype.Selector = {};
    
    
    
    /*
    [Malta] objects/Class.js
    */
    NS.Class = (function () {
        function Class() {}
        Class.create = function () {}
        Class.Methods = function () {}
        return Class
    })();
    /*
    [Malta] objects/Hash.js
    */
    NS.Hash = (function () {
        function Hash() {}
        Hash.create = function () {}
        Hash.Methods = function () {}
        return Hash
    })();
    /*
    [Malta] objects/Ajax.js
    */
    NS.Ajax = (function () {
    
    })();
    /*
    [Malta] BOM/require.js
    */
    /*
    [Malta] BOM/document.js
    */
    NS.document = {d : 1}
})(this);