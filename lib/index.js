// Copyright (c) 2018 commonality <greg@swindle.net> (https://github.com/commonality). All rights reserved.

// See LICENSE <https://github.com/commonality/readme-inspector/blob/master/LICENSE>.

/*
 * Load required environment variables
 * @see /lib/.env.example
 * @private
 * @ignore
 */

const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

/**
 * Represents the contents of files within a repository as Base64 encoded content.
 * @external Contents
 * @see {@link https://developer.github.com/v3/repos/contents/#get-the-readme}
 * @example
 * {
 *   "type": file",
 *   "encoding": base64",
 *   "size": 5362,
 *   "name": README.md",
 *   "path": README.md",
 *   "content": encoded content ...",
 *   "sha": 3d21ec53a331a6f037a91c368710b99387d012c1",
 *   "url": https://api.github.com/repos/octokit/octokit.rb/contents/README.md",
 *   "git_url": https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
 *   "html_url": https://github.com/octokit/octokit.rb/blob/master/README.md",
 *   "download_url": https://raw.githubusercontent.com/octokit/octokit.rb/master/README.md",
 *   "_links": {
 *     "git": https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
 *     "self": https://api.github.com/repos/octokit/octokit.rb/contents/README.md",
 *     "html": https://github.com/octokit/octokit.rb/blob/master/README.md"
 *   }
 * }
 */

/**
 * A GitHub REST API client instance.
 * @external Octokit
 * @see {@link https://github.com/octokit/rest.js/#readme}
 */

/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * @external Promise
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise}
 */

/**
 * A Node.js WHATWG URL object.
 * @external URL
 * @see {@link https://nodejs.org/api/url.html}
 */

/**
 * Detect whether or not a README document exists at the root of a
 * GitHub or GitHub Enterprise repository. If a README exists,
 * evaluate the README for quality and provide a numerical score
 * from 0 to 100, where 0 is the lowest quality and 100 is the
 * highest.
 *
 * @public
 * @prop {external:Octokit} api - A GitHubAPI (@octokit/rest) instance.
 * @see https://github.com/octokit/rest.js/#readme
 * @see https://octokit.github.io/rest.js/
 *
 * @prop {ReadmeAppraisal} ReadmeAppraisal - An API proxy/wrapper that
 * invokes the readme-score-api in order to assess and grade
 * the quality of a README file.
 *
 * @module readme-inspector
 */

const githubRestApiOptions = require('./github-rest-api-options')
const Octokit = require('@octokit/rest')
const readmeInfo = require('./readme-info')
const ReadmeAppraisal = require('./readme-appraisal')

/**
 * Octokit GitHubAPI shadow instance.
 *
 * @private
 * @ignore
 */

const octokit = new Octokit(githubRestApiOptions)

/**
 * @module readme-inspector
 * @alias readmeInspector
 */

const readmeInspector = {
  ReadmeAppraisal,

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

  authenticate (credentials) {
    const creds = credentials || {
      'token': envConfig.GH_TOKEN,
      'type': 'token'
    }
    octokit.authenticate(creds)
  },

  /**
   * Attempts to GET a README at the root of a GitHub
   * (or GitHub Enterprise) repository and, if found,
   * rate its quality with the
   * [readme-score-api](https://github.com/clayallsopp/readme-score-api/#readme).
   *
   * @method check
   * @memberOf module:readme-inspector
   *
   * @param {object} params - The owner/org, repo, and (optional)
   *  branch to check.
   * @param {string} params.owner - The account or organization to which
   *  the source code belongs.
   * @param {string} params.repo - The name of the repository in which
   *  to look for a README.
   * @param {string} [params.ref={Default branch}] - The name of the
   *  commit/branch/tag.
   *  Default: the repository’s default branch (usually master).
   * @returns {Promise<ReadmeInfo>}
   * @fulfil {ReadmeInfo} - A {ReadmeInfo} object with the `appraisal` property.
   * @reject {ReadmeInfo} - A {ReadmeInfo} object with a defined `error` property.
   */

  async check (params = {
  }) {
    const info = await readmeInspector.getInfo(params)
    if (info.isPresent) {
      info.appraisal = await readmeInspector.getAppraisal(`${params.owner}/${params.repo}`)
    }
    return info
  },

  /**
   * An API proxy for the readme-score-api, which provides quality
   * measures for README files with the {@link appraisalData AppraisalData}
   * interface.
   *
   * @method getAppraisal
   * @memberOf module:readme-inspector
   * @param {string} url - The URL or slug of a repository.
   *
   * @returns {Promise<AppraisalData>}
   * @see https://github.com/clayallsopp/readme-score-api/#readme
   */

  async getAppraisal (url) {
    const readmeAppraisal = new ReadmeAppraisal()
    const appraisal = await readmeAppraisal.for(url)
    return appraisal
  },

  /**
   * Attempts to GET a remote README at the root of a GitHub
   * (or GitHub Enterprise) repository, but with an {AppraisalData}
   * `NullObject`.
   *
   * @method getInfo
   * @memberOf module:readme-inspector
   *
   * @param {object} params - The owner/org, repo, and (optional)
   *  branch to check.
   * @param {string} params.owner - The account or organization to which
   *  the source code belongs.
   * @param {string} params.repo - The name of the repository in which
   *  to look for a README.
   * @param {string} [params.ref={Default branch}] - The name of the
   *  commit/branch/tag.
   *  Default: the repository’s default branch (usually master).
   * @returns {Promise.<ReadmeInfo>}
   * @fulfil {ReadmeInfo} - A {ReadmeInfo} object with `null` {AppraisalData}.
   * @reject {ReadmeInfo} - A {ReadmeInfo} object with a defined `err` property.
   *
   * @see https://octokit.github.io/rest.js/#api-Repos-getReadme
   */

  async getInfo (params) {
    const info = Object.assign({
    }, readmeInfo)
    try {
      const {data} = await readmeInspector.api.repos.getReadme(params)
      info.value = data
      info.isPresent = true
    } catch (err) {
      info.err = err
      info.isPresent = false
    }

    return info
  }
}

module.exports = readmeInspector
