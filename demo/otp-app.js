import { watch, reactive, html } from 'https://esm.sh/@arrow-js/core'
import { createOneTimePad, codebook, checkLength } from './otp-encrypt-js.browser.esm.js'
// , textToPlaincode, plaincodeToText, encryptPlaincode, decryptEncryptedMsg, eng, nob }

const otp = createOneTimePad(128)
const lengthValid = checkLength('some string', otp)

console.log(codebook[0].id + ' ' + codebook[0].emoji)
console.log(otp)
console.log(lengthValid)

const data = reactive({
  otp: '',
  otpLength: 64,
  message: '',
  plaincode: '',
  encrypted: '',
  decryptedPlaincode: '',
  decryptedMessage: ''
})

function generateOtp () {
  data.otp = createOneTimePad(64)
}

// ## template
const appElement = document.getElementById('app')

const template = html`
  <div id="otp">
    <h2>1. OTP (one-time pad)</h2>
    <textarea placeholder="paste or generate one-time pad" value="${() => data.otp}"></textarea><br />
    <input type="number" id="otplength" value="128" /><button @click="${generateOtp}">Generate one-time pad</button>
  </div>
  <div id="message">
    <h2>2. Message</h2>
    <textarea placeholder="message"></textarea>
    <div>characters left and too long: true/false</div>
  </div>
  <div id="plaincodedMessage">
    <h2>3. Plaincoded message</h2>
    <textarea placeholder="plaincode"></textarea>
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
