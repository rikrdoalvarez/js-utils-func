const log = (text, show = true) => {
    if (show) {
        console.log(`\u001b[37m${text}`, `\u001b[0m`);
    }
};
const error = (text, show = true) => {
    if (show) {
        console.error(`\u001b[31m${text}`, `\u001b[0m`);
    }
};
const warn = (text, show = true) => {
    if (show) {
        console.warn(`\u001b[33m${text}`, `\u001b[0m`);
    }
};
const info = (text, show = true) => {
    if (show) {
        console.info(`\u001b[34m${text}`, `\u001b[0m`);
    }
};
const table = (text, show = true) => {
    if (show) {
        console.table(text);
    }
};

module.exports = {
    log,
    error,
    warn,
    info,
    table,
};
