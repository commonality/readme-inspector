/* eslint max-len:0 */
let got = require('got')
const ReadmeAppraisal = require('../readme-appraisal')
const scoreNoReadme = require('./__fixtures__/http/404/readme-score')
const scoreWithReadme = require('./__fixtures__/http/200/readme-score')

describe('ReadmeAppraisal is an API proxy for the readme-score-api', () => {
  let readmeAppraisal = null

  beforeEach(() => {
    readmeAppraisal = new ReadmeAppraisal()
  })

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

    it('returns a resolved Promise<AppraisalData>', async (done) => {
      const appraisal = await readmeAppraisal.for(slug)
      expect(appraisal).toBeDefined()
      done()
    })
    it('returns a rejected Promise if a README is not present', async (done) => {
      const appraisal = await readmeAppraisal.for(uri)
      expect(appraisal).toBeDefined()
      done()
    })
    it("transforms the response.body's properties from snake_case to camelCase", async () => {
      const appraisal = await readmeAppraisal.for(slug)
      expect(appraisal.breakdown).toBeDefined()
      expect(appraisal.breakdown.hasLists).toBeDefined()
    })
  })
})
