import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

export default [
  // ### Browsers ###
  // UMD and ES module
  {
    input: './src/index.js',
    output: [
      // { file: './dist/otp-encrypt-js.browser.esm.js', format: 'es' }
      { file: './dist/otp-encrypt-js.browser.esm.js', format: 'es', globals: { crypto: 'globalVariable' } }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(),
      json() // for Rollup to be able to read content from codebook-emojis.json
    ]
  }
  // UMD and ES module, minified versions
  // {
  //   input: './src/index.js',
  //   output: [
  //     { file: './dist/otp-encrypt-js.browser.esm.min.js', format: 'es', globals: { crypto: 'globalVariable' } }
  //   ],
  //   plugins: [
  //     resolve(), // so Rollup can find `ms`
  //     terser(), // Minify
  //     json() // for Rollup to be able to read content from codebook-emojis.json
  //   ]
  // }
]
