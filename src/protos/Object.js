/**
 * clone
 * extend
 * inspect
 * isArray
 * isDate
 * isElement
 * isFunction
 * isHash
 * isNumber
 * isString
 * isUndefined
 * keys
 * toHTML
 * toJSON
 * toQueryString
 * values
 */
import Hash from './../objects/Hash'
import exp from './../core/shared'
import CONSTANTS from './../core/constants'
import CHECKERS from './../core/checkers'
import _string from './String'

const { IS_DONTENUM_BUGGY, DONT_ENUMS, } = CONSTANTS
const  {
    _hasOwnProperty,
    isObject,
    isElement,
    isArray
} = CHECKERS

const _Object = (function () {

    function clone(object) {
        return exp({}, object);
    }

    // TODO: original implementation... does IS_DONTENUM_BUGGY
    // stil make sense?
    function keys(object) {
        if (!isObject(object)) {
            throw new TypeError();
        }
        var results = [],
            p;
        for (p in object) {
            if (_hasOwnProperty.call(object, p))
                results.push(p);
        }
        if (IS_DONTENUM_BUGGY) {
            for (p = 0; p = DONT_ENUMS[i]; i++) {
                if (_hasOwnProperty.call(object, p))
                    results.push(p);
            }
        }
        return results;
    }

    function values(object) {
        var results = [];
        for (var property in object)
            results.push(object[property]);
        return results;
    }

    function isHash(object) {
        return object instanceof Hash;
    }
    
    function stringify(object) {
        return JSON.stringify(object);
    }

    return  {
        clone,
        isArray,
        isElement,
        isHash,
        inspect: o => JSON.stringify(o, null, 2),
        values,
        toJSON: stringify,
        toHTML: _string.interpret,
        keys
    }
})()

export default _Object