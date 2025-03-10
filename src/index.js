import { codebook } from 'unicode-emojis-unique-id-json'
import { emojiRegex } from './regex-emojis.js'
import { eng } from './conversiontable-eng.js'
import { nob } from './conversiontable-nob.js'

// ### Function: Text to plaincode
function textToPlaincode (text, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook]
  text = text.toLowerCase()

  // split into array of characters
  let regex = emojiRegex + '|' + conversionLanguage.textRegex
  regex = new RegExp(regex, 'g')
  const textArr = text.match(regex)

  // convert text to plaincode
  const plaincode = textArr.map((character) => {
    const letterObj = conversionLanguage.table.find(obj => obj.unicode === character)
    try {
      return letterObj.plaincode
    } catch (error) {
      return ' '
    }
  })
  return plaincode.join('')
}

// ### Function: Plaincode to text
function plaincodeToText (plaincode, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook]
  // finding via regex: plaincode enteties in plaincode string
  const regex = new RegExp(conversionLanguage.plaincodeRegex, 'g')
  const plaincodeArr = plaincode.match(regex)

  // convert plaincode to text
  const text = plaincodeArr.map((plaincode) => {
    const letterObj = conversionLanguage.table.find(obj => obj.plaincode === plaincode)
    return letterObj.unicode
  })
  return text.join('')
}

// ### Function: Check one-time pad >= plaincode
function checkLength (plaincode, otp) {
  let tooLong = false
  const plaincodeLength = plaincode.length
  const otpLength = otp.length
  if (plaincodeLength > otpLength) {
    tooLong = true
  }
  return { plaincodeLength, otpLength, tooLong }
}

// ### Function: Encrypt
function encryptPlaincode (plaincode, otp) {
  // Split string into array
  const plaincodeArr = plaincode.split('')
  const otpArr = otp.split('')

  // Encrypt
  const encryptedMsg = plaincodeArr.map((digit, index) => {
    const encryptedDigit = encryptDecryptDigit(digit, otpArr[index], 'encrypt')
    return encryptedDigit
  })
  return encryptedMsg
}

// ### Function: Decrypt
function decryptEncryptedMsg (encryptedMsg, otp) {
  // Split string into array
  const encryptedMsgArr = encryptedMsg.split('')
  const otpArr = otp.split('')

  // Decrypt
  const decryptedMsg = encryptedMsgArr.map((encryptedDigit, index) => {
    const decryptedDigit = encryptDecryptDigit(encryptedDigit, otpArr[index], 'decrypt')
    return decryptedDigit
  })
  return decryptedMsg
}

// ### Function
function encryptDecryptDigit (digit, otpKey, direction) {
  let encryptedDecrypted
  if (direction === 'encrypt') {
    encryptedDecrypted = (parseInt(digit, 10) + parseInt(otpKey, 10)) % 10
  }
  if (direction === 'decrypt') {
    encryptedDecrypted = (digit - otpKey + 10) % 10
  }
  return encryptedDecrypted
}

// ### Function: Create one-time pad based on crypto.getRandomValues
const createOneTimePad = function (length) {
  let otp = ''
  const randomValuesArr = crypto.getRandomValues(new Uint8Array(length))
  // converting from 0-255 to single digits (0-9)
  for (let i = 0; i < randomValuesArr.length; i++) {
    otp += Math.floor(randomValuesArr[i] / 256 * 10)
  }
  return otp
}

export { createOneTimePad, codebook, textToPlaincode, plaincodeToText, checkLength, encryptPlaincode, decryptEncryptedMsg, eng, nob }
