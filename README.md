# OTPEncryptJS

[![NPM version](http://img.shields.io/npm/v/otpencryptjs.svg?style=flat)](https://npmjs.org/package/otpencryptjs)
[![NPM downloads](http://img.shields.io/npm/dm/otpencryptjs.svg?style=flat)](https://npmjs.org/package/otpencryptjs) 
[![jSDelivr CDN](https://data.jsdelivr.com/v1/package/npm/otpencryptjs/badge?style=rounded)](https://www.jsdelivr.com/package/npm/otpencryptjs)
[![tests](https://github.com/eklem/otpencryptjs/actions/workflows/tests.yml/badge.svg)](https://github.com/eklem/otpencryptjs/actions/workflows/tests.yml)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Library of helper-functions for encrypting and decrypting messages with OTPs - One-time pads. Funcions for:
* Generating one-time-pads - encryption/decryption keys.
* Converting plaintext to plaincode.
* Converting plaincode to plaintext.
* Encrypting plaincode text
* Decrypting encrypoted text
* Check length of message is too long for the encryption key.
* Language conversion tables, regular expressions for plaintext <-> plaincode and codebook for emojis. 

![Example-code](https://github.com/eklem/otpencryptjs/blob/trunk/otp-library-03.png)

Will be core functionality together with [nfc-json-transfer](https://github.com/eklem/nfc-json-transfer) for creating [otp-encryption-toy](https://github.com/eklem/otp-encryption-toy)

## Getting the script in your environment

### CJS - CommonJS

```javaScript
const { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } = require('otpencryptjs')
```

### ESM - Ecmascript Modules

```javaScript
import { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } from 'otpencryptjs'
```


## Usage

index.mjs:
```javaScript
import { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } from 'otpencryptjs'

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

// ### Decrypting encrypted message
const decryptedPlaincode = decryptEncryptedMsg(encryptedMsg.join(''), otp)
console.log('Decrypted plaincode: ' + decryptedPlaincode.join(''))

// ### Plaincode to text - The message delivered!
const textConverted = plaincodeToText(decryptedPlaincode.join(''), nob, codebook)
console.log('Decrypted msg:       ' + textConverted + '\n\n')
```

When doing ESM-version of the library, run it with:

```sh
node --experimental-json-modules index.mjs
```



## API

### `textToPlaincode()`

Converts plaintext to plaincode. Plaincode is just numbers, and not encrypted. It's a step that uses a conversion table to change the text, numbers and emojis into numbers, which makes it possible to do one-time-pad encryption.

```javaScript
textToPlaincode(text, conversionLanguage, codebook)
// Returns plaincode string from a string of text.
```

### `plaincodeToText()`

Converts plaincode back to plaintext.

```javaScript
plaincodeToText(plaincode, conversionLanguage, codebook)
// Returns text string from plaincode string.
```

### `createOnetimePad()`

The length of the should be equal to or larger than your plaincode. And it should only be used once. This ensures that it is impossible to break the code and read the encrypted message.

```javaScript
createOnetimePad(length)
// Returns a one-time pad of desired length, as a string of digits.
```

### `checkLength()`

Helper function to check if plaincode length (and thus your message length) is too long, and also show the user how close they are to exceed length of one-time pad.

```javaScript
checkLength(plaincode, otp)
// Returns { plaincodeLength: plaincodeLength, otpLength: otpLength, tooLong: tooLong }
```

### `encryptPlaincode()`

Encrypt the plaincode using a one-time-pad.

```javaScript
encryptPlaincode(plaincode, otp)
// Returns encrypted message as an string of digits. This is the encrypted message.
```

### `decryptEncryptedMsg()`

Decrypts the encrypted message with the same one-time-pad that it was encrypted with.

```javaScript
decryptEncryptedMsg(encryptedMsg, otp)
// Returns message as a string of digits - The message in plainccode.
```

### Language conversion tables, regular expressions and codebook

Each language contains variables for conversion tables and regular expressions. Most used letters differs from language to language. To be able to keep the plaincode short and thus needing shorter one-time-pads, the five most used letters are assigned to 0-5 in plaincode. Numbers starts with the digit `9` and consists of 3 digits.

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
eng.textRegex: '[a-z0-9\\s]|[,@#+-/.:!(=?)]'
```

#### `[language-code].plaincodeRegex`

Example from `eng` which for latin character based languages should be mostly the same.

```javaScript
eng.plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})'
```

#### `codebook`

* **00000 - 09999:**
  Unicode emojis

Codebook for emojis. Not language specific. Starts with a `0` in plaincode and then 4 digits. Traditionallhy it has been used to be able to write shorter messages, having a short code for longer, often used words. Here it is to be able to express all Unicode emojis.

Example of three first entries:

```javaScript
codebook: [
  {
    unicode: '😀',
    plaincode: 00000
  },
  {
    unicode: '😃',
    plaincode: 00001
  },
  {
    unicode: '😄',
    plaincode: 00002
  }
]
```

## Maintenance

If unicode emojis are updated (to i.e. v.16 from v.15)

```console
cd scipts
node ./fetch-emojis.mjs && node ./create-emoji-regex.mjs && node ./create-emoji-codebook.mjs
```

## Possible issue

* It's an untested toy. Don't bet your life on it. But it can be used to teach kids and minors about the importance of encryption. [Discussion about the library and one-time-pad encryption on Reddit](https://www.reddit.com/r/crypto/comments/uf4k2g/onetime_pad_encryption_what_are_the_downsides/).
* Exchanging one-time-pads is a problem. May be tackled with [nfc-json-transfer](https://github.com/eklem/nfc-json-transfer).
* I haven't found a unique way of numbering/addressing the unicode emojis that will work cross unicode emoji versions, so then stuff won't encrypt/decrypt properly if you use different versions of the library.
