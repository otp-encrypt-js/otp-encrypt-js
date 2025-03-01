import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'

export default [
  // ### Node JS ###
  // CommonJS and ES module
  {
    input: './src/index-node.js',
    output: [
      { file: './dist/otp-encrypt-js.nodejs.cjs.js', format: 'cjs', exports: 'named' },
      { file: './dist/otp-encrypt-js.nodejs.esm.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json() // for Rollup to be able to read content from codebook-emojis.json
    ]
  },
  // CommonJS and ES module, minified versions
  {
    input: './src/index-node.js',
    output: [
      { file: './dist/otp-encrypt-js.nodejs.cjs.min.js', format: 'cjs', exports: 'named' },
      { file: './dist/otp-encrypt-js.nodejs.esm.min.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(), // Minify
      json() // for Rollup to be able to read content from codebook-emojis.json
    ]
  },
  // ### Browsers ###
  // UMD and ES module
  {
    input: './src/index-browser.js',
    output: [
      { name: 'otp', file: './dist/otp-encrypt-js.browser.umd.js', format: 'umd', exports: 'named', globals: { crypto: 'globalVariable' } },
      { file: './dist/otp-encrypt-js.browser.esm.mjs', format: 'es', globals: { crypto: 'globalVariable' } }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json() // for Rollup to be able to read content from codebook-emojis.json
    ]
  },
  // UMD and ES module, minified versions
  {
    input: './src/index-browser.js',
    output: [
      { name: 'otp', file: './dist/otp-encrypt-js.browser.umd.min.js', format: 'umd', exports: 'named', globals: { crypto: 'globalVariable' } },
      { file: './dist/otp-encrypt-js.browser.esm.min.mjs', format: 'es', globals: { crypto: 'globalVariable' } }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(), // Minify
      json() // for Rollup to be able to read content from codebook-emojis.json
    ]
  }
]
