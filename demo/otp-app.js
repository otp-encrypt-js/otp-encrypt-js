// import { eng } from './stopword.esm.mjs'
import { createOneTimePad } from './otp-encrypt-js.browser.esm.js'

const otp = createOneTimePad(128)

console.log(otp)
