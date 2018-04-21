const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

const {URL} = require('url')
const appraisalData = require('./appraisal-data')
const camelCase = require('lodash.camelcase')
const got = require('got')
const mapKeys = require('lodash.mapkeys')

const adapt = (appraisal) => {
  appraisal.breakdown =
    mapKeys(appraisal.breakdown, (val, key) => camelCase(key))
  return appraisal
}

/**
 *
 * @module readme-inspector/readme-appraisal
 *
 * @class ReadmeAppraisal
 * @classdesc
 * An API proxy/wrapper that invokes the readme-score-api
 * in order to assess and grade the quality of a README file.
 *
 * @param {string} [serviceEndpointUrl=http://readme-score-api.herokuapp.com/score.json?url=&human_breakdown=false&force=false] - The URL of the
 *  readme-score-api service you want to consume.
 */

class ReadmeAppraisal {
  constructor (serviceEndpointUrl = envConfig.API_ENDPOINT_README_SCORE) {
    this.apiEndpoint = new URL(serviceEndpointUrl)
  }

  /**
   * Evalutate the root-level README in a repository (if present).
   *
   * @method for
   * @param {string} url - A URL or repository slug.
   * @param {URL} [apiEndpoint=http://readme-score-api.herokuapp.com/score.json?url=] - The API endpoint.
   * @returns {Promise<AppraisalData>} AppraisalData for a README.
   * @memberof ReadmeAppraisal#
   * @example
   * const ReadmeAppraisal = require('./readme-appraisal')
   *
   * // Parameters: url|slug|string<html>
   * const readmeAppraisal = new ReadmeAppraisal()
   * const result = await readmeAppraisal.for('commonality/readme-inspector')
   */

  async for (url) {
    this.apiEndpoint.searchParams.set('url', url)
    const serviceUrl = this.apiEndpoint.toString()
    let result = null
    try {
      const {body} = await got(serviceUrl)
      result = Object.assign({
      }, appraisalData, JSON.parse(body))
    } catch (err) {
      /* istanbul ignore next */
      result.err = err.response.body
    }

    return adapt(result)
  }
}

module.exports = ReadmeAppraisal
