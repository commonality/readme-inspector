const readmeInfo = require('./readme-info')
const Octokit = require('@octokit/rest')
const ReadmeScore = require('./readme-score')
const restClientOptions = require('./rest-client-options')

const octokit = new Octokit(restClientOptions)

const inspector = {
  'api': octokit,

  'authenticate': octokit.authenticate,

  async check  (owner, repo, ref) {
    /* istanbul ignore next */
    const info = await inspector.getReadMeInfo(owner, repo, ref)
    /* istanbul ignore next */
    if (info.isPresent) {
      info.scoreData = await ReadmeScore.for(`${owner}/${repo}`)
    }
    /* istanbul ignore next */
    return info
  },

  async getReadMeInfo (owner, repo, ref) {
    const info = /* istanbul ignore next */ readmeInfo.factory()
    try {
      const {data} = await octokit.repos.getReadme({
        owner,
        ref,
        repo
      })
      /* istanbul ignore next */
      info.value = data
      /* istanbul ignore next */
      info.isPresent = true
    } catch (err) {
      info.err = err
      info.isPresent = false
    }

    return info
  },

  'readmeScore': ReadmeScore
}

module.exports = inspector
