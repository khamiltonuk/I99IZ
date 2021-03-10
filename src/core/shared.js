
/**
 * what prototype calls internally `extend`
 */
export function mixin(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}


export default {
    mixin
}