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