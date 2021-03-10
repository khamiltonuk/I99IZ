export default (...args) => args.reduce((acc, arg) => {
    const r = document.querySelectorAll(arg)
    return r.length ? acc.concat(r) : acc;
}, []);