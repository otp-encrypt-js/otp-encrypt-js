# otp-encrypt-js

One-time pad encryption and decryption library for the browser.

[![NPM version](http://img.shields.io/npm/v/otp-encrypt-js.svg?style=flat)](https://npmjs.org/package/otp-encrypt-js)
[![NPM downloads](http://img.shields.io/npm/dm/otp-encrypt-js.svg?style=flat)](https://npmjs.org/package/otp-encrypt-js) 
[![jSDelivr CDN](https://data.jsdelivr.com/v1/package/npm/otp-encrypt-js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/otp-encrypt-js)
[![tests](https://github.com/eklem/otp-encrypt-js/actions/workflows/tests.yml/badge.svg)](https://github.com/eklem/otp-encrypt-js/actions/workflows/tests.yml)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Library of helper-functions for encrypting and decrypting messages with OTPs - One-time pads. Funcions for:
* Generating one-time-pads - encryption/decryption keys.
* Converting plaintext to plaincode.
* Converting plaincode to plaintext.
* Encrypting plaincode text
* Decrypting encrypoted text
* Check length of message is too long for the encryption key.
* Language conversion tables, regular expressions for plaintext <-> plaincode and codebook for emojis. 

## Demo
![Aminamtion of otp-encrypt-js demo in use](https://github.com/user-attachments/assets/b7ce64aa-c68a-4684-bba3-3ce3d79fbcdb)

You can check out the demo yourself: [otp-encrypt-js demo](https://eklem.github.io/otp-encrypt-js/demo/)

## Getting the script in your environment

### ESM - Ecmascript Modules

Will only work in the browser. Using it directly in an HTML file

```html
<script type="module">
  import { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } from 'otp-encrypt-js'
  // Your app here
</script>
```

Or you can import it from another JavaScript module:

```javaScript
import { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } from 'otp-encrypt-js'
```

## Usage

### Encryption

```javaScript
import { plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode } from 'otp-encrypt-js'

// The message
const txt = 'Hello 👨‍👩‍👦‍👦🏳️‍🌈😀🇿🇼  world 123 æøå!'
console.log('\n\nInput:               ' + txt)

// ### Text to plaincode
const plaincodeConverted = textToPlaincode(txt, nob, codebook)
console.log('Plaincode:           ' + plaincodeConverted)

// ### Creating a one-time pad
const otp = createOnetimePad(96)
console.log('One-time pad:        ' + otp)

// ### Checking length of plaincode vs. one-time pad
const lengthObj = checkLength(plaincodeConverted, otp)
console.log('Length:              ' + JSON.stringify(lengthObj))

// ### Encrypting plaincode
const encryptedMsg = encryptPlaincode(plaincodeConverted, otp)
console.log('Encrypted plaincode: ' + encryptedMsg.join(''))
```

```javascript

import { textToPlaincode, decryptEncryptedMsg, nob, codebook } from 'otp-encrypt-js'

// ### otp - onetime pad the same as for encrypting the message
// ### Decrypting encrypted message
const decryptedPlaincode = decryptEncryptedMsg(encryptedMsg.join(''), otp)
console.log('Decrypted plaincode: ' + decryptedPlaincode.join(''))

// ### Plaincode to text - The message delivered!
const textConverted = plaincodeToText(decryptedPlaincode.join(''), nob, codebook)
console.log('Decrypted msg:       ' + textConverted + '\n\n')
```

## API

### Encrypting a mesaage

#### `createOnetimePad()`

The length of the should be equal to or larger than your plaincode. And it should only be used once. This ensures that it is impossible to break the code and read the encrypted message.

```javaScript
createOnetimePad(length)
// Returns a one-time pad of desired length, as a string of digits.
```

#### `textToPlaincode()`

Converts plaintext to plaincode. Plaincode is just numbers, and not encrypted. It's a step that uses a conversion table to change the text, numbers and emojis into numbers, which makes it possible to do one-time pad encryption.

```javaScript
textToPlaincode(text, conversionLanguage, codebook)
// Returns plaincode string from a string of text.
```

#### `checkLength()`

Helper function to check if plaincode length (and thus your message length) is too long, and also show the user how close they are to exceed length of one-time pad.

```javaScript
checkLength(plaincode, otp)
// Returns { plaincodeLength: plaincodeLength, otpLength: otpLength, tooLong: tooLong }
```

#### `encryptPlaincode()`

Encrypt the plaincode using a one-time pad.

```javaScript
encryptPlaincode(plaincode, otp)
// Returns encrypted message as an string of digits. This is the encrypted message.
```

### Decrypting a message

#### `decryptEncryptedMsg()`

Decrypts the encrypted message with the same one-time pad that it was encrypted with. You'll need the one-time pad (otp) you used to encrypt the message.

```javaScript
decryptEncryptedMsg(encryptedMsg, otp)
// Returns message as a string of digits - The message in plainccode.
```

#### `plaincodeToText()`

Converts plaincode back to plaintext.

```javaScript
plaincodeToText(plaincode, conversionLanguage, codebook)
// Returns text string from plaincode string.
```

### Both needed for encrypting and decrypting messages

Language conversion tables, regular expressions and codebook.

Each language contains variables for conversion tables and regular expressions. Most used letters differs from language to language. To be able to keep the plaincode short and thus needing shorter one-time pads, the five most used letters are assigned to 0-5 in plaincode. Numbers starts with the digit `9` and consists of 3 digits.

The table is used for converting letters, digits and emojis to plaincode and the other way around. There are two regular expressions for each language. One is to split up text strings containing text, numbers and emojis into single letters, digits and emojis. The other one is to split up a plaincode-string into an array of plaincodes so that you it can use the conversion table to get a plaincode-string to a text-string (text, numbers and emojis).

#### For each language three variables/arrays are available

```javaScript
[language-code].table
[language-code].textRegex
[language-code].plaincodeRegex
```

#### Language codes

* `eng` - English
* `nob` - Norwegian

If you need it we can helpo add more languages.

#### Layout of conversion table

* **00000 - 09999:**
  Codebook, which consists of Unicode emojis
* **1 - 5:**
  5 most used letters for this language
* **60 - 89:**
  Other letters and symbols
* **900 - 909:**
  Numbers from 0-9
* **91 -99:**
  More symbols

#### `[language-code].table`

Example from `eng`. It differs from each language depending on the what's the most used letter, and how many letter the alphabet consists of.

```javaScript
table: [
    { unicode: 'a', plaincode: '1' },
    { unicode: 'e', plaincode: '2' },
    { unicode: 'i', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 'o', plaincode: '5' },
    { unicode: 't', plaincode: '60' },
    { unicode: 'b', plaincode: '61' },
    { unicode: 'c', plaincode: '62' },
    { unicode: 'd', plaincode: '63' },
    { unicode: 'f', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'h', plaincode: '66' },
    { unicode: 'j', plaincode: '67' },
    { unicode: 'k', plaincode: '68' },
    { unicode: 'l', plaincode: '69' },
    { unicode: 'm', plaincode: '70' },
    { unicode: 'p', plaincode: '71' },
    { unicode: 'q', plaincode: '72' },
    { unicode: 'r', plaincode: '73' },
    { unicode: 's', plaincode: '74' },
    { unicode: 'u', plaincode: '75' },
    { unicode: 'v', plaincode: '76' },
    { unicode: 'w', plaincode: '77' },
    { unicode: 'x', plaincode: '78' },
    { unicode: 'y', plaincode: '79' },
    { unicode: 'z', plaincode: '80' },
    { unicode: ',', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
```

#### `[language-code].textRegex`

Example from `eng`. It differs a little bit for each language.

```javaScript
eng.textRegex: '[a-z0-9\\s]|[,@#+-/.:\'!(=?)]'
```

#### `[language-code].plaincodeRegex`

Example from `eng` which for latin character based languages should be mostly the same.

```javaScript
eng.plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})'
```

#### `codebook`

* **000001 - 099999:**
  Unicode emojis

Codebook for emojis. Not language specific. Starts with a `0` in plaincode and then 5 digits. Traditionally it has been used to be able to write shorter messages, having short codes for longer, often used words. Here it is to be able to express all Unicode emojis.

Example of three first entries:

```javaScript
const codebook = [
  {
    "id": "000001",
    "emoji": "😃"
  },
  {
    "id": "000002",
    "emoji": "😀"
  },
  {
    "id": "000003",
    "emoji": "😄"
  }
]
```

## Dev setup

### Live Preview

Install VSCode plugin: **Live Preview by Microsoft** and use **VSCode port forwarding**.

`shift` + `command` + `p`

```console
Live Preview: Start Server
Live Preview: Start Server Logging
```

Under `ports` tab in server logging window, set port forwarding on port 3000



## Issues

* It's an untested librar. Don't bet your life on it. But it can be used to teach kids and minors about the importance of encryption. [Discussion about the library and one-time pad encryption on Reddit](https://www.reddit.com/r/crypto/comments/uf4k2g/onetime_pad_encryption_what_are_the_downsides/).
* Exchanging one-time pads is a problem. May be tackled with [nfc-json-transfer](https://github.com/eklem/nfc-json-transfer).
