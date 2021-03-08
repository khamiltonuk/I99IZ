
import vars from './vars'
import exp from './core/shared.js'
import protos from './protos'
import funcs from './funcs'
import objects from './objects'
import BOM from './BOM'

(function(CTX) {
    CTX[vars.LIB] = {};
    const NS = CTX[vars.LIB];
    exp.mixin(NS, protos)
    exp.mixin(NS, funcs)
    exp.mixin(NS, objects)
    exp.mixin(NS, BOM)
})(window);