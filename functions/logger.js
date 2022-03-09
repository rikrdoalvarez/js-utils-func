const bunyan = require('bunyan');
const bunyanFormat = require('bunyan-format');
const fs = require('fs-extra');

const loggerConsole = bunyanFormat({ outputMode: 'long', levelInString: true });

const pkg = require('../package.json');

fs.ensureFileSync('logs/error.log');
fs.ensureFileSync('logs/all.log');
fs.ensureFileSync('logs/debug.log');

const errorStream = {
    type: 'rotating-file',
    path: 'logs/error.log',
    period: '1d',
    count: 10,
    level: 'error',
};

const infoStream = {
    type: 'rotating-file',
    path: 'logs/all.log',
    period: '1d',
    count: 10,
    level: 'info',
};

const consoleStream = {
    stream: loggerConsole,
    level: 'debug',
    name: 'debug',
};

const debugStream = {
    type: 'rotating-file',
    path: 'logs/debug.log',
    period: '1d',
    count: 10,
    level: 'debug',
};

const logger = bunyan.createLogger({
    name: pkg.name,
    streams: [consoleStream, errorStream, infoStream, debugStream],
});

module.exports = logger;
