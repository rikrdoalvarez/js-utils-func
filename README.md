# js-utils-func

This package contains a Javascript utilities functions to help developers to start with a standard base to their developments.

<!-- TOC titleSize:2 tabSpaces:2 depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 skip:0 title:1 charForUnorderedList:* -->

## Table of Contents

---

-   [Installation](#Installation)
-   [Features](#Features)
    -   [Encryptation](#Encryptation)
        -   [Encrypto](#Encrypto)
        -   [Crypto](#Crypto)
    -   [Logger](#Logger)
        -   [Log](#Log)
        -   [Console](#Console)
-   [Release notes](#Release)
    <!-- -   [app.js](#appjs) -->

<!-- /TOC -->

## Installation

---

<!-- ```sh -->

    npm install js-utils-func

<!-- ``` -->

## Features

---

In this package you will find the following features:

### **Encryptation**

#### **Encrypto**

General features to encrypt/decrypt your data, based on [crypto-js](https://www.npmjs.com/package/crypto-js) package

> -   **encrypt(data, algorithm, key):** encrypt the data with the given algorithm and key
> -   **decrypt(data, algorithm, key):** decrypt the data with the given algorithm and key

#### **Crypto**

Encryption features that allows you to keep exposed information secure
Functions:

> -   **encrypt(data, key, output):** encrypt the data with the given key, the output value indicates if the function encrypt or not
> -   **decrypt(data, key, output):** decrypt the data with the given key, the output value indicates if the function decrypt or not
> -   **send(data, key, output):** encrypt the data with the given key to be sent as api response, the output boolean value indicates if the result is showed or not
> -   **receive(data, key, output):** decrypt the data with the given key to be receive as api request, the output boolean value indicates if the result is showed or not

### **Logger**

#### **Log**

General features to log your code in terminal and daily files, based on [bunyan](https://www.npmjs.com/package/bunyan) package.
The output log format is: [yyyy-mm-dd date] LABEL: hostname/pid on server: DATA

> -   **info(data):** log with a INFO label
> -   **warn(data):** log with a WARN label
> -   **error(data):** log with a ERROR label
> -   **debug(data):** log with a DEBUG label
> -   **fatal(data):** log with a FATAL label

#### **Console**

The console feature allow you to set a colored output printed in the terminal and when should be printed or not

> -   **console.log(text, show):** The show boolean value indicates if the log is printed in the terminal in color white
> -   **console.error(text, show):** The show boolean value indicates if the error is printed in the terminal in color red
> -   **console.warn(text, show):** The show boolean value indicates if the warn is printed in the terminal in color yellow
> -   **console.info(text, show):** The show boolean value indicates if the info is printed in the terminal in color blue
> -   **console.table(text, show):** The show boolean value indicates if the log is printed in the terminal

## Release notes

---

### **1.0.X**

Initial version with the following features:

-   Crypto
-   Console

### **1.1.X**

New features:

-   Encrypto
-   Log
