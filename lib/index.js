/**
 * Detect whether or not a README document exists at the root of a
 * GitHub or GitHub Enterprise repository. If a README exists,
 * evaluate the README for quality and provide a numerical score
 * from 0 to 100, where 0 is the lowest quality and 100 is the
 * highest.
 *
 * @prop {Octokit} api - A GitHubAPI (@octokit/rest) instance.
 * @see https://github.com/octokit/rest.js/#readme
 * @see https://octokit.github.io/rest.js/
 *
 * @prop {ReadmeScore} readmeScore -  An API proxy for the
 * readme-score-api, which provides quality measures for README files.
 * @see https://github.com/clayallsopp/readme-score-api/#readme
 * @exports readme-inspector
 */

const readmeInfo = require('./readme-info')
const Octokit = require('@octokit/rest')
const ReadmeScore = require('./readme-score')
const restClientOptions = require('./rest-client-options')

/**
 * Octokit GitHubAPI shadow instance.
 *
 * @private
 * @ignore
 */

const octokit = new Octokit(restClientOptions)

const readmeInspector = {
  'api': octokit,

  /**
   * Sets GitHub credentials for all subsequent requests.
   *
   * @method
   * @memberOf module:readme-inspector
   *
   * @param {object} credentials - Secret strings used to prove identity.
   * @param {string} credentials.type - Valid values are `basic`, `oauth`, `token`, and `integration`.
   * @param {string} credentials.username - The name of an agent.
   * @param {string} credentials.password - A secret sequence of characters.
   * @param {string} credentials.token
   * @param {string} credentials.key
   * @param {string} credentials.secret
   *
   * @returns {void}
   * @see https://github.com/octokit/rest.js#authentication
   */

  'authenticate': octokit.authenticate,

  /**
   * Attempts to GET a README at the root of a GitHub
   * (or GitHub Enterprise) repository and, if found,
   * rate its quality with the
   * [readme-score-api](https://github.com/clayallsopp/readme-score-api/#readme).
   *
   * @method check
   * @memberOf module:readme-inspector
   * @returns Promise
   * @fulfil {ReadmeInfo} - A ReadmeInfo object with the `scoreData` property.
   * @reject {ReadmeInfo} - A ReadmeInfo object with a defined `error` property.
   */

  async check (owner, repo, ref) {
    const info = await readmeInspector.getReadmeInfo(owner, repo, ref)
    if (info.isPresent) {
      info.scoreData = await ReadmeScore.for(`${owner}/${repo}`)
    }
    return info
  },

  /**
   * Attempts to GET a remote README at the root of a GitHub
   * (or GitHub Enterprise) repository, but with a {NullScoreData}
   * object.
   *
   * @method getReadmeInfo
   * @memberOf module:readme-inspector
   *
   * @param {string} owner - The account or organization to which
   *  the source code belongs.
   * @param {string} repo - The name of the repository in which
   *  to look for a README.
   * @param {string} [ref={Default branch}] - The name of the
   *  commit/branch/tag.
   *  Default: the repository’s default branch (usually master).
   * @returns {Promise}
   * @fulfil {ReadmeInfo} - A ReadmeInfo object with {NullScoreData}.
   * @reject {ReadmeInfo} - A ReadmeInfo object with a defined `error` property.
   */

  async getReadmeInfo (owner, repo, ref) {
    const info = readmeInfo.factory()
    try {
      const {data} = await readmeInspector.api.repos.getReadme({
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
  },

  'readmeScore': ReadmeScore
}

module.exports = readmeInspector
