const readmeInspector = require('../..')

const readmeInspectorScore = require('../__fixtures__/http/200/readme-inspector-score')
const noReadmeScore = require('../__fixtures__/http/404/readme-score')

describe('API', () => {
  describe('readme-score-api', () => {
    describe('HTTP 200', () => {
      it('evaluates READMES by GitHub slug', async () => {
        const slug = 'commonality/readme-inspector'
        const appraisal = await readmeInspector.getReadmeScore(slug)
        expect(appraisal).toEqual(readmeInspectorScore)
      })
      it('evaluates READMES by GitHub URL', async () => {
        const url = 'https://github.com/commonality/readme-inspector'
        readmeInspectorScore.url = url
        const appraisal = await readmeInspector.getReadmeScore(url)
        expect(appraisal).toEqual(readmeInspectorScore)
      })
      it('evaluates READMES by GitHub Enterprise slug')
      it('evaluates READMES by GitHub Enterprise URL')
    })

    describe('HTTP 404', () => {
      it('evaluates READMES by GitHub slug', async () => {
        const slug = 'gregswindle/no-readme'
        const appraisal = await readmeInspector.getReadmeScore(slug)
        expect(appraisal).toEqual(noReadmeScore)
      })
      it('evaluates READMES by GitHub URL', async () => {
        const url = 'https://github.com/gregswindle/no-readme'
        const appraisal = await readmeInspector.getReadmeScore(url)
        appraisal.error = `Could not determine score for gregswindle/no-readme`
        expect(appraisal).toEqual(noReadmeScore)
      })
      it('evaluates READMES by GitHub Enterprise slug')
      it('evaluates READMES by GitHub Enterprise URL')
    })
  })
})
