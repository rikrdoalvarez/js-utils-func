const CryptoJS = require('crypto-js');

const encrypt = (data, secret) => {
    let encrypted;
    try {
        const encryptSecretKey = secret;
        encrypted = CryptoJS.AES.encrypt(data, encryptSecretKey).toString();
        let b64 = CryptoJS.enc.Base64.parse(encrypted);
        encrypted = b64.toString(CryptoJS.enc.Hex);
    } catch (e) {
        console.log('Error encrypting data: ' + e);
    }
    return encrypted;
};

const decrypt = (encryptedData, secret) => {
    const encryptSecretKey = secret;
    let data;
    try {
        let b64 = CryptoJS.enc.Hex.parse(encryptedData);
        let bytes = b64.toString(CryptoJS.enc.Base64);
        data = CryptoJS.AES.decrypt(bytes, encryptSecretKey);
        data = data.toString(CryptoJS.enc.Utf8);
    } catch (e) {
        console.log('Error decrypting data: ' + e);
    }
    return data;
};

const send = async (content, secret, output) => {
    if (output) {
        const resp = await encrypt(JSON.stringify(content), secret);
        return { response: resp };
    }
    return content;
};
const receive = async (content, secret, output) => {
    if (output) {
        const resp = await decrypt(content.response, secret);
        return JSON.parse(resp);
    }
    return content;
};

// /**
//  * Encrypt object values of string and numbers.
//  * @param {*} obj
//  * @returns object
//  */
// const encryptObject = async (obj) => {
//     try {
//         let keys = Object.keys(obj);
//         for (let i = 0; i < keys.length; i++) {
//             if (typeof obj[keys[i]] !== 'object') {
//                 let value = obj[keys[i]];
//                 if (typeof obj[keys[i]] === 'number') {
//                     value = value.toString();
//                 }
//                 if (typeof obj[keys[i]] === 'string' || typeof obj[keys[i]] === 'number') {
//                     obj[keys[i]] = encrypt(value);
//                 }
//             } else {
//                 obj[keys[i]] = await encryptObject(obj[keys[i]]);
//             }
//         }
//         return obj;
//     } catch (e) {
//         console.log(e);
//     }
// };

// /**
//  * Decrypt object values of string and numbers.
//  * @param {*} obj
//  * @returns object
//  */
// const decryptObject = async (obj) => {
//     try {
//         let keys = Object.keys(obj);
//         for (let i = 0; i < keys.length; i++) {
//             if (typeof obj[keys[i]] !== 'object') {
//                 let value = obj[keys[i]];
//                 if (typeof obj[keys[i]] === 'number') {
//                     value = value.toString();
//                 }
//                 if (typeof obj[keys[i]] === 'string' || typeof obj[keys[i]] === 'number') {
//                     obj[keys[i]] = decrypt(value);
//                 }
//             } else {
//                 obj[keys[i]] = await decryptObject(obj[keys[i]]);
//             }
//         }
//         return obj;
//     } catch (e) {
//         console.log(e);
//     }
// };

module.exports = {
    encrypt,
    decrypt,
    send,
    receive,
    // encryptObject,
    // decryptObject,
};
