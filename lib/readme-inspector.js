const nullReadmeInfo = require('./null-readme-info')
const Octokit = require('@octokit/rest')
const ScoreMe = require('./score-me')

class ReadmeInspector {
  constructor (options) {
    this.api = new Octokit()
    this.owner = options.owner
    this.readme = nullReadmeInfo
    this.repo = options.repo
    this.url = `${this.owner}/${this.repo}`
  }

  authenticate (credentials) {
    this.api.authenticate(credentials)
  }

  async check () {
    await this.getReadme()
    if (this.readme.isPresent) {
      await this.score()
      return this.readme
    }
    return this.readme
  }

  async getReadme () {
    this.readme = Object.assign({
    }, nullReadmeInfo)
    try {
      const {data} = await this.api.repos.getReadme({
        'owner': this.owner,
        'repo': this.repo
      })
      this.readme.value = data
      this.url = data.html_url.replace(/\/blob\/.*$/, '')
      this.readme.isPresent = true
    } catch (err) {
      this.readme.err = err
      this.readme.isPresent = false
    }
    return this.readme
  }

  async score () {
    const score = new ScoreMe(this.url)
    try {
      const calculation = await score.calculate()
      this.readme.score = JSON.parse(calculation)
    } catch (err) {
      this.readme = Object.assign({
      }, nullReadmeInfo)
      this.readme.err = err.response.body
    }
    return this.readme.score
  }
}

module.exports = ReadmeInspector
