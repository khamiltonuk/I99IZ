NS.Prototype = {
    ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() { },
    K: function(x) { return x },
    Version: "maltaV('PACKAGE.version')"
};


maltaF('objects/Prototype/Browser.js')
maltaF('objects/Prototype/BrowserFeatures.js')
maltaF('objects/Prototype/Selector.js')