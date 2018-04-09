const ScoreMe = require('../score-me')

jest.mock('got')

describe('ScoreMe', () => {
  describe('is a proxy for the readme-score-api', () => {
    it('returns a rejected Promise if a README is not present', async (done) => {
      const scoreMe = new ScoreMe('gregswindle/no-readme')
      const result = await scoreMe.calculate()
      expect(result).toBeDefined()
      done()
    })
  })

  it('returns a resolved Promise of results otherwise', async (done) => {
    const scoreMe = new ScoreMe('gregswindle/github-resource-converter')
    const result = await scoreMe.calculate()
    expect(result).toBeDefined()
    done()
  })
})
