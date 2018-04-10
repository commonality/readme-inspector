/* eslint no-magic-numbers:0 */
const noReadme = require('./no-readme')
const noReadmeJson = JSON.stringify(noReadme)

const noReadmeResponse = [
  200,
  {
    'Content-Type': 'application/json'
  },
  [`${noReadmeJson}`]
]

module.exports = noReadmeResponse
