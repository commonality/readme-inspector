/* eslint no-magic-numbers:0 */
const noReadmeInfo = require('./readme-info')

const responseNoReadmeInfo = [
  404,
  {
    'Content-Type': 'application/json'
  },
  [noReadmeInfo]
]

module.exports = responseNoReadmeInfo
