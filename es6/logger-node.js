const infoStyle = '44;37';
const warnStyle = '43;30';
const errorStyle = '41;30';
const successStyle = '42;30';
const logger = {
    _log: (style, ...args) => {
        const tips = [];
        const vals = [];
        const tip = args[0];
        if (typeof tip === 'string') {
            tips.push('\033' + `[${style}m ${tip}`);
            tips.push('\033[0m');
        }
        for (let i = 1; i < args.length; i++) {
            const item = args[i];
            vals.push(item);
        }
        console.log(...tips, ...vals);
    },
    info: (...args) => {
        logger._log(infoStyle, ...args);
    },
    warn: (...args) => {
        logger._log(warnStyle, ...args);
    },
    error: (...args) => {
        logger._log(errorStyle, ...args);
    },
    success: (...args) => {
        logger._log(successStyle, ...args);
    },
    img: () => {},
    table: () => {},
};

module.exports = logger;