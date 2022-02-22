# js-utils-func

This package contains a Javascript utilities functions to help developers to start with a standard base to their developments.

<!-- TOC titleSize:2 tabSpaces:2 depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 skip:0 title:1 charForUnorderedList:* -->

## Table of Contents

---

-   [Installation](#Installation)
-   [Features](#Features)
    -   [Console](#Console)
    -   [Crypto](#Crypto)
-   [Release notes](#Release)
    <!-- -   [app.js](#appjs) -->

<!-- /TOC -->

## Installation

---

```sh
npm install js-utils-func
```

## Features

---

Below you will find the features enabled in this package

### Console

The console feature allow you to set a colored output printed in the terminal and when should be printed or not

-   **console.log(show, text):** The show boolean value indicates if the log is printed in the terminal in color white
-   **console.error(show, text):** The show boolean value indicates if the error is printed in the terminal in color red
-   **console.warn(show, text):** The show boolean value indicates if the warn is printed in the terminal in color yellow
-   **console.info(show, text):** The show boolean value indicates if the info is printed in the terminal in color blue
-   **console.table(show, text):** The show boolean value indicates if the log is printed in the terminal

### Crypto

Encryption features allow you to keep exposed information secure
Functions:

-   **encrypt(data, key):** encrypt the data with the given key
-   **decrypt(data, key):** decrypt the data with the given key
-   **send(data, key, output):** encrypt the data with the given key to be sent as api response, the output boolean value indicates if the result is showed or not
-   **receive(data, key, output):** decrypt the data with the given key to be receive as api request, the output boolean value indicates if the result is showed or not

## Release notes

---

### 1.0.X

Initial version with the following features:

-   Console
-   Crypto
