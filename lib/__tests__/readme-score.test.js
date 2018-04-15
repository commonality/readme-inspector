/* eslint max-len:0 */
let got = require('got')
const ReadmeScore = require('../readme-score')
const scoreNoReadme = require('./__fixtures__/http/404/readme-score')
const scoreWithReadme = require('./__fixtures__/http/200/readme-score')

describe('ReadmeScore is an API proxy for the readme-score-api', () => {
  describe('for is its only method', () => {
    const slug = 'gregswindle/github-resource-converter'
    const uri = 'https://github.com/gregswindle/no-readme'

    beforeEach(() => {
      const {GotError} = got
      got = jest.fn().mockImplementation((url) => {
        if (url.includes('no-readme')) {
          return Promise.reject(new GotError(scoreNoReadme))
        }
        return Promise.resolve({
          'body': scoreWithReadme
        })
      })
    })

    afterEach(() => {
      jest.resetAllMocks().clearAllMocks()
    })

    it('returns a resolved Promise<ScoreData>', async () => {
      const result = await ReadmeScore.for(slug)
      expect(result).toBeDefined()
    })
    it('returns a rejected Promise if a README is not present', async () => {
      const result = await ReadmeScore.for(uri)
      expect(result).toBeDefined()
    })
    it("transforms the response.body's properties from snake_case to camelCase", async () => {
      const result = await ReadmeScore.for(slug)
      expect(result.breakdown.hasLists).toBeDefined()
    })
  })
})
