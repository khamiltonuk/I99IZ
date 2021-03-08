
import vars from './vars'
import exp from './core/shared.js'
import protos from './protos/'

(function(CTX) {
    CTX[vars.LIB] = {};
    const NS = CTX[vars.LIB];
    exp.mixin(NS, protos)

//     import('./funcs')
//     import('./objects')
//     import('./BOM')
})(window);