/**
 * polluted functions:
 * - from
 * - clear
 * - clone
 * - compact
 * - every
 * - filter
 * - first
 * - flatten
 * - indexOf
 * - inspect
 * - intersect
 * - last
 * - lastIndexOf
 * - map
 * - reverse
 * - size
 * - some
 * - toArray
 * - uniq
 * - without
 */


const Array = {
    loop: (a, f) => a.map(f)
}

export default Array