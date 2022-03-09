const CryptoJS = require('crypto-js');

const encrypt = (data, key, output) => {
    if (output || output === undefined) {
        let encrypted;
        try {
            const encryptSecretKey = key;
            encrypted = CryptoJS.AES.encrypt(data, encryptSecretKey).toString();
            let b64 = CryptoJS.enc.Base64.parse(encrypted);
            encrypted = b64.toString(CryptoJS.enc.Hex);
        } catch (e) {
            console.log('Error encrypting data: ' + e);
        }
        return encrypted;
    }
    return data;
};

const decrypt = (data, key, output) => {
    if (output || output === undefined) {
        const encryptSecretKey = key;
        let decryptedData;
        try {
            let b64 = CryptoJS.enc.Hex.parse(data);
            let bytes = b64.toString(CryptoJS.enc.Base64);
            decryptedData = CryptoJS.AES.decrypt(bytes, encryptSecretKey);
            decryptedData = decryptedData.toString(CryptoJS.enc.Utf8);
        } catch (e) {
            console.log('Error decrypting data: ' + e);
        }
        return decryptedData;
    }
    return data;
};

const send = async (data, key, output) => {
    if (output) {
        const resp = await encrypt(JSON.stringify(data), key);
        return { response: resp };
    }
    return data;
};
const receive = async (data, key, output) => {
    if (output) {
        const resp = await decrypt(data.response, key);
        return JSON.parse(resp);
    }
    return data;
};

/**
 * Encrypt object values of string and numbers.
 * @param {*} obj
 * @returns object
 */
const encryptObject = async (obj, key) => {
    try {
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] !== 'object') {
                let value = obj[keys[i]];
                if (typeof obj[keys[i]] === 'number') {
                    value = value.toString();
                }
                if (typeof obj[keys[i]] === 'string' || typeof obj[keys[i]] === 'number') {
                    obj[keys[i]] = encrypt(value, key);
                }
            } else {
                obj[keys[i]] = await encryptObject(obj[keys[i]], key);
            }
        }
        return obj;
    } catch (e) {
        console.log(e);
    }
};

/**
 * Decrypt object values of string and numbers.
 * @param {*} obj
 * @returns object
 */
const decryptObject = async (obj, key) => {
    try {
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] !== 'object') {
                let value = obj[keys[i]];
                if (typeof obj[keys[i]] === 'number') {
                    value = value.toString();
                }
                if (typeof obj[keys[i]] === 'string' || typeof obj[keys[i]] === 'number') {
                    obj[keys[i]] = decrypt(value, key);
                }
            } else {
                obj[keys[i]] = await decryptObject(obj[keys[i]], key);
            }
        }
        return obj;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    encrypt,
    decrypt,
    send,
    receive,
    encryptObject,
    decryptObject,
};
