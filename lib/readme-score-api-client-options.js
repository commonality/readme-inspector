const {format, URL} = require('url')
const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

/**
 * The readme-score-api on Heroku.
 * @ignore
 * @private
 */

const apiEndpoint = new URL(envConfig.API_ENDPOINT_README_SCORE)

const readmeScoreApiClientOptions = {
  'baseUrl': apiEndpoint.toString(),
  format,
  'href': apiEndpoint.href,
  'params': {
    'force': false,
    'human_breakdown': false,
    'url': ''
  }
}

module.exports = readmeScoreApiClientOptions
