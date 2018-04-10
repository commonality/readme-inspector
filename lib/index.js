const readmeInfo = require('./readme-info')
const Octokit = require('@octokit/rest')
const ReadmeScore = require('./readme-score')
const restClientOptions = require('./rest-client-options')

/**
 * Octokit GitHubAPI shadow instance.
 *
 * @private
 */

const octokit = new Octokit(restClientOptions)

/**
 *
 * @private
 * @ignore
 */

const check = async (owner, repo, ref) => {
  const info = await inspector.getReadMeInfo(owner, repo, ref)
  if (info.isPresent) {
    info.scoreData = await ReadmeScore.for(`${owner}/${repo}`)
  }
  return info
}

/**
 *
 * @private
 * @ignore
 */

const getReadMeInfo = async (owner, repo, ref) => {
  const info = readmeInfo.factory()
  try {
    const {data} = await inspector.api.repos.getReadme({
      owner,
      ref,
      repo
    })
    info.value = data
    info.isPresent = true
  } catch (err) {
    info.err = err
    info.isPresent = false
  }

  return info
}

/**
 * Detect whether or not a README document exists at the root of a
 * GitHub or GitHub Enterprise repository. If a README exists,
 * evaluate the README for quality and provide a numerical score
 * from 0 to 100, where 0 is the lowest quality and 100 is the
 * highest.
 *
 * @name readmeInspector
 * @alias readmeInspector
 *
 * @prop {Octokit} api - A GitHubAPI instance
 * @prop {ScoreData} readmeScore - Provides quality measures for
 *  README files.
 *
 * @memberOf readme-inspector
 */

const inspector = {
  'api': octokit,

  /**
   * Sets GitHub credentials for all subsequent requests.
   *
   * @method authenticate
   * @memberOf readmeInspector
   *
   * @param {object} credentials - Secret strings used to prove identity.
   * @param {enum<string>} credentials.type - Valid values are basic, oauth, token, and integration.
   * @param {string} credentials.username - The name of an agent.
   * @param {string} credentials.password - A secret sequence of characters.
   * @param {string} credentials.token
   * @param {string} credentials.key
   * @param {string} credentials.secret
   *
   * @returns {void}
   */

  'authenticate': octokit.authenticate,

  check,

  getReadMeInfo,

  'readmeScore': ReadmeScore
}

module.exports = inspector
