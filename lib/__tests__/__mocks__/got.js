/* eslint prefer-promise-reject-errors:0 */
let got = jest.genMockFromModule('got')
const noReadme = require('../__fixtures__/score-me-no-readme.json')
const readme = require('../__fixtures__/score-me-gregswindle-github-resource-converter.json')

got = (url) => {
  if (url.includes('github-resource-converter')) {
    return Promise.resolve({
      'body': readme
    })
  }
  return Promise.reject({
    'response': {
      'body': noReadme
    }
  })
}

module.exports = got
