import { watch, reactive, html } from 'https://esm.sh/@arrow-js/core'
import { createOneTimePad, codebook, checkLength, textToPlaincode, plaincodeToText, encryptPlaincode, decryptEncryptedMsg, eng } from './otp-encrypt-js.browser.esm.js'

const otp = createOneTimePad(128)
const lengthValid = checkLength('some string', otp)

console.log(codebook[0].id + ' ' + codebook[0].emoji)
console.log(otp)
console.log(lengthValid)

// ### Data
const data = reactive({
  otp: '',
  otpLength: 64,
  message: '',
  plaincode: '',
  encrypted: '',
  decryptedPlaincode: '',
  decryptedMessage: ''
})

// ## template
const appElement = document.getElementById('app')

const template = html`
  <div id="otp">
    <h2>1. OTP (one-time pad)</h2>
    <textarea placeholder="paste or generate one-time pad" value="${() => data.otp}"></textarea><br />
    <input type="number" id="otplength" value="64" @change="${updateOtpLength}" /><button @click="${generateOtp}">Generate one-time pad</button>
  </div>
  <div id="message">
    <h2>2. Message</h2>
    <textarea id="messageText" placeholder="message" @input="${getMessage}"></textarea>
    <div>characters left and too long: true/false</div>
  </div>
  <div id="plaincodedMessage">
    <h2>3. Plaincoded message</h2>
    <textarea placeholder="plaincode" value="${() => data.plaincode}"></textarea>
  </div>
  <div id="encryptedMessage">
    <h2>4. Encrypted message</h2>
    <textarea placeholder="encrypted message"></textarea>
  </div>
  <div id="decryptedPlaincode">
    <h2>5. Decrypted plaincode</h2>
    <textarea placeholder="decrypted plaincode"></textarea>
  </div>
  <div id="decryptedMessage">
  <h2>6. Decrypted message</h2>
    <textarea placeholder="decrypted message"></textarea>
  </div>
`
template(appElement)

// ### Functions

function generateOtp () {
  data.otp = createOneTimePad(data.otpLength)
}

function updateOtpLength () {
  data.otpLength = document.getElementById('otplength').valueAsNumber
  console.log(data.otpLength)
}

function getMessage () {
  if (document.getElementById('messageText').value !== null) {
    data.message = document.getElementById('messageText').value
    console.log(data.message)
  }
}

// ### Watchers

data.$on('message', (value) => {

})

function plaincodeMessage () {
  if (data.message) {
    data.plaincode = textToPlaincode(data.message, eng, codebook)
  }
}

watch(plaincodeMessage)
