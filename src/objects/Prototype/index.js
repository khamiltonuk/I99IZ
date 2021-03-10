import Browser from './Browser'
import BrowserFeatures from './BrowserFeatures'
import Selector from './Selector'
import { mixin } from './../../core/shared'
import pkg from './../../../package.json'

const Prototype =  {
    ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() { },
    K: function(x) { return x },
    Version: pkg.version
};
mixin(Prototype, Browser)
mixin(Prototype, BrowserFeatures)
mixin(Prototype, Selector)

export default Prototype