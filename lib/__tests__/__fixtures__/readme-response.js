/* eslint no-magic-numbers:0 */
const readme = require('./readme')
const readmeJson = JSON.stringify(readme)

const readmeResponse = [
  200,
  {
    'Content-Type': 'application/json'
  },
  [readmeJson]
]

module.exports = readmeResponse
