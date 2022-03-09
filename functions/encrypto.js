const crypto = require('crypto');
const log = require('./logger');

function Encryption() {
    let self = this;
    self.encrypt = function (data, algorithm, key) {
        try {
            const cipher = crypto.createCipheriv(algorithm, key, '');
            const encryptedData = cipher.update(data, 'utf8', 'base64') + cipher.final('base64');
            return encryptedData;
        } catch (e) {
            log.error(e);
        }
    };
    self.decrypt = function (data, algorithm, key) {
        try {
            const decipher = crypto.createDecipheriv(algorithm, key, '');
            const decripted = decipher.update(data, 'base64', 'utf8') + decipher.final('utf8');
            return decripted;
        } catch (e) {
            log.error(e);
        }
    };
}

const encrypt = (data, algorithm, key) => {
    const encryptor = new Encryption();
    return encryptor.encrypt(data, algorithm, key);
};

const decrypt = (data, algorithm, key) => {
    const encryptor = new Encryption();
    return encryptor.decrypt(data, algorithm, key);
};

module.exports = {
    encrypt,
    decrypt,
};
