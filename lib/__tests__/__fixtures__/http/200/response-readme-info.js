/* eslint no-magic-numbers:0 */
const readmeInfo = require('./readme-info')

const responseReadme = [
  200,
  {
    'Content-Type': 'application/json'
  },
  [readmeInfo]
]

module.exports = responseReadme
