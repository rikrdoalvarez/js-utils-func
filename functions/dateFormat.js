const log = require('./logger');

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
};

const isDate = (date) => {
    if (date instanceof Date && !isNaN(date)) {
        return true;
    } else {
        return false;
    }
};

const format = (input, format) => {
    try {
        let date = input;
        if (!isDate(input)) {
            const date_reformat = input.replace(/%3A/g, ':');
            date = new Date(date_reformat);
            if (!isDate(date)) {
                return undefined;
            }
        }
        // log.debug(`Date to format: ${date}`);
        switch (format) {
            case 'DDMMYYYY':
                return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('-');
                break;
            case 'YYYYMMDD':
                return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
                break;
            case 'HHMM':
                return [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':');
                break;
            default:
                return undefined;
        }
    } catch (err) {
        log.error(`Date conversion error: ${err}`);
        return undefined;
    }
};

module.exports = {
    format,
};
