var LIB = {
    ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() { },
    K: function(x) { return x }
};

_ctx.maltaV('LIB') = LIB;
_ctx.maltaV('PROTO_NS') = {};
var proto = _ctx.maltaV('PROTO_NS')

maltaF('core/shared.js');

maltaF('core/Browser.js');
maltaF('core/BrowserFeatures.js');
maltaF('core/Selector.js');
maltaF('formerProtos/Object.js');