/**
 * A {@link WHATWG URL https://nodejs.org/api/all.html#url_the_whatwg_url_api}
 * object representing an API proxy URI endpoint for
 * {@link readme-score-api https://github.com/clayallsopp/readme-score-api/#readme}
 * service. Defaults to
 * "http://readme-score-api.herokuapp.com/score.json?url=&human_breakdown=false&force=false",
 * but it can be overridden by replacing the value for API_ENDPOINT_README_SCORE= in
 *
 * - lib/.env/defaults
 * - .env
 *
 * @memberOf module:readme-inspector
 * @see https://nodejs.org/api/all.html
 * @inner
 */

const {format, URL} = require('url')
const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

const readmeScoreApiClientOptions = {
  'apiEndpoint': new URL(envConfig.API_ENDPOINT_README_SCORE),

  /**
   * @borrows {@ url.format https://nodejs.org/api/all.html#url_url_format_urlobject} as format
   */

  format
}

module.exports = readmeScoreApiClientOptions
