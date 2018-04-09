const got = require('got')
const nullScoreMeData = require('./null-score-me-data')

class ScoreMe {
  constructor (url) {
    this.jsonUrl =
      `http://readme-score-api.herokuapp.com/score.json?url=${url}&force=true`
    this.result = {
      'json': nullScoreMeData
    }
  }

  async score (url) {
    try {
      const response = await got(url)
      this.result.json = response.body
    } catch (err) {
      this.result.json.err = err.response.body
    }
    return this.result.json
  }

  async calculate () {
    const result = await this.score(this.jsonUrl)
    return result
  }
}

module.exports = ScoreMe
