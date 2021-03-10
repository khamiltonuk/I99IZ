
const _Date = (function () {
    function toISOString(d) {
        return d.getUTCFullYear() + '-' +
            (d.getUTCMonth() + 1).toPaddedString(2) + '-' +
            d.getUTCDate().toPaddedString(2) + 'T' +
            d.getUTCHours().toPaddedString(2) + ':' +
            d.getUTCMinutes().toPaddedString(2) + ':' +
            d.getUTCSeconds().toPaddedString(2) + 'Z';
    }
    function toJSON(d) {
        return d.toISOString();
    }
    return  {
        toISOString,
        toJSON
    }
})();

export default _Date