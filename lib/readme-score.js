const camelCase = require('lodash.camelcase')
const dotenv = require('dotenv')
const got = require('got')
const scoreData = require('./score-data')
const transform = require('lodash.transform')

const envConfig = dotenv.config()

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
 * Grades README files.
 *
 * @name ReadmeScore
 * @memberOf module:readme-inspector
 */

const ReadmeScore = {
  /**
   * Evalutate the root-level README in a repository (if present).
   *
   * @static
   * @param {string} url - A URL or repository slug.
   * @returns {Promise<ScoreData>} ScoreData for a README.
   * @memberof ReadmeScore
   * @example
   * const ReadmeScore = require('./readme-score')
   *
   * // Parameters: url|slug|string<html>
   * const result = await ReadmeScore.for('commonality/readme-inspector')
   */

  async for (url) {
    const uri = `${envConfig.required.API_ENDPOINT_README_SCORE}${url}`
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
