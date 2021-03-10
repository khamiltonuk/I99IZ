
/**
 * what prototype calls internally `extend`
 */
export const mixin = (destination, source) => {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}


export default {
    mixin
}