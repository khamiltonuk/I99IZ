NS.Prototype = {
    ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() { },
    K: function(x) { return x },
    Version: "maltaV('PACKAGE.version')"
};


include('./Browser.js')
include('./BrowserFeatures.js')
include('./Selector.js')