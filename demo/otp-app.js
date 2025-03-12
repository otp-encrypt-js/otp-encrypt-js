import { watch, reactive, html } from 'https://esm.sh/@arrow-js/core'
import { createOneTimePad, codebook, checkLength, textToPlaincode, plaincodeToText, encryptPlaincode, decryptEncryptedMsg, eng, nob } from './otp-encrypt-js.browser.esm.js'

const otp = createOneTimePad(128)
const lengthValid = checkLength('some string', otp)

console.log(codebook[0].plaincode + ' ' + codebook[0].unicode)
console.log(otp)
console.log(lengthValid)

// ### Data
const data = reactive({
  otp: '',
  otpLength: 64,
  message: '',
  language: 'eng',
  checkLength: { optLeft: 0, tooLong: false },
  plaincode: '',
  encrypted: '',
  plaincodeDecrypted: '',
  messageDecrypted: ''
})

// ## template
const appElement = document.getElementById('app')

const template = html`
  <div id="otp">
    <h2>1. OTP (one-time pad)</h2>
    <textarea placeholder="paste or generate one-time pad" value="${() => data.otp}"></textarea><br />
    <input type="number" id="otplength" value="64" @change="${e => { data.otpLength = e.target.value }}" /><button @click="${generateOtp}">Generate one-time pad</button>
  </div>
  <div id="message">
    <h2>2. Message  <span>${() => data.checkLength.otpLeft} ciphers left of OTP</span></h2>
    <textarea placeholder="message" @input="${e => { data.message = e.target.value }}"></textarea>
    <div>
      <select name="language" id="language-select" @change="${e => { data.language = e.target.value }}">
        <option value="eng">English</option>
        <option value="nob">Norwegian</option>
    </select>
    </div>
  </div>
  <div id="plaincodedMessage">
    <h2>3. Plaincoded message</h2>
    <textarea placeholder="plaincode" value="${() => data.plaincode}"></textarea>
  </div>
  <div id="encryptedMessage">
    <h2>4. Encrypted message</h2>
    <textarea placeholder="encrypted message" value="${() => data.encrypted}"></textarea>
  </div>
  <div id="decryptedPlaincode">
    <h2>5. Decrypted plaincode</h2>
    <textarea placeholder="decrypted plaincode" value="${() => data.plaincodeDecrypted}"></textarea>
  </div>
  <div id="decryptedMessage">
  <h2>6. Decrypted message</h2>
    <textarea placeholder="decrypted message" value="${() => data.messageDecrypted}"></textarea>
  </div>
`
template(appElement)

// ### Functions

function generateOtp () {
  data.otp = createOneTimePad(data.otpLength)
}

function checkLengthLocal () {
  data.checkLength = checkLength(data.plaincode, data.otp)
}

function plaincodeMessage () {
  if (data.message) {
    if (data.language === 'eng') {
      data.plaincode = textToPlaincode(data.message, eng, codebook)
    } else if (data.language === 'nob') {
      data.plaincode = textToPlaincode(data.message, nob, codebook)
    }
  } 
}

function encryptPlaincodeLocal () {
  if (!data.checkLength.tooLong) {
    data.encrypted = encryptPlaincode(data.plaincode, data.otp).join('')
  }
}

function decryptPlaincode () {
  data.plaincodeDecrypted = decryptEncryptedMsg(data.encrypted, data.otp).join('')
}

function decryptMessage () {
  if (data.plaincodeDecrypted !== '') {
    if (data.language === 'eng') {
      data.messageDecrypted = plaincodeToText(data.plaincodeDecrypted, eng, codebook)
    } else if (data.language === 'nob') {
      data.messageDecrypted = plaincodeToText(data.plaincodeDecrypted, nob, codebook)
    }
  }
}

// ### Watchers
watch(plaincodeMessage)
watch(checkLengthLocal)
watch(encryptPlaincodeLocal)
watch(decryptPlaincode)
watch(decryptMessage)
