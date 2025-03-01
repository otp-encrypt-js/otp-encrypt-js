const { textToPlaincode, plaincodeToText, createOnetimePad, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } = require('./dist/otp-encrypt-js.nodejs.cjs.js')

// The message
const message = 'Hello 👨‍👩‍👦‍👦🏳️‍🌈😀🇿🇼  world, 123:æøå! https://somesecreturl.com/'
console.log('\n\nMessage:             ' + message)

// ### Testing: Text to plaincode
const plaincodeConverted = textToPlaincode(message, nob, codebook)
console.log('Plaincode:           ' + plaincodeConverted)

// ### Testing: Creating a one-time pad
const otp = createOnetimePad(1024)
console.log('One-time pad:        ' + otp)

// ### Checking length of plaincode vs. one-time pad
const lengthObj = checkLength(plaincodeConverted, otp)
console.log('Length:              ' + JSON.stringify(lengthObj))

// ### Testing: Encrypting plaincode
const encryptedMsg = encryptPlaincode(plaincodeConverted, otp)
console.log('Encrypted plaincode: ' + encryptedMsg.join(''))

// ### Testing: Decrypting encrypted message
const decryptedPlaincode = decryptEncryptedMsg(encryptedMsg.join(''), otp)
console.log('Decrypted plaincode: ' + decryptedPlaincode.join(''))

// ### Plaincode to text - The message delivered!
const textConverted = plaincodeToText(decryptedPlaincode.join(''), nob, codebook)
console.log('Decrypted message:   ' + textConverted + '\n\n')
