const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

const camelCase = require('lodash.camelcase')
const got = require('got')
const readmeScoreApiClientOptions = require('./readme-score-api-client-options')
const scoreData = require('./score-data')
const transform = require('lodash.transform')

/**
 * Transform Ruby snake-case convention into JavaScript's camel-case
 * convention.
 *
 * @param {string} result - JSON response body.
 * @returns {ScoreData} With camelCase properties.
 * @private
 * @ignore
 */

const adapt = (result) => {
  const data = JSON.parse(result)
  const nullScoreData = scoreData.factory()

  /* istanbul ignore next */
  data.breakdown = transform(
    result.breakdown,
    (object, value, key) => (object[camelCase(key)] = value),
    {
    }
  )

  return Object.assign(data, nullScoreData)
}

/**
 * An API proxy/wrapper that invokes the readme-score-api
 * in order to assess and grade the quality of a README file.
 *
 * @typedef {Object} ReadmeScore
 * @memberOf module:readme-inspector
 */

const ReadmeScore = {
  /**
   * Evalutate the root-level README in a repository (if present).
   *
   * @method for
   * @param {string} url - A URL or repository slug.
   * @param {string} [apiEndpoint=http://readme-score-api.herokuapp.com/score.json?url=] - The API endpoint.
   * @returns {Promise<ScoreData>} ScoreData for a README.
   * @memberof module:readme-inspector.ReadmeScore
   * @example
   * const ReadmeScore = require('./readme-score')
   *
   * // Parameters: url|slug|string<html>
   * const result = await ReadmeScore.for('commonality/readme-inspector')
   */

  async for (url, apiEndpoint = readmeScoreApiClientOptions.href) {
    const uri = `${envConfig.API_ENDPOINT_README_SCORE}`
    let result = scoreData.factory()
    try {
      const response = await got(uri)
      result = response.body
    } catch (err) {
      /* istanbul ignore next */
      result.err = err.response.body
    }

    return adapt(result)
  }
}

module.exports = ReadmeScore
