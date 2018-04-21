const readmeInspector = require('../..')

const readmeInspectorScore =
  require('../__fixtures__/http/200/readme-inspector-score')
const noReadmeAppraisal = require('../__fixtures__/http/404/readme-score')

describe('API', () => {
  describe('readme-score-api', () => {
    describe('HTTP 200', () => {
      it('evaluates READMES by GitHub slug', async () => {
        const slug = 'commonality/readme-inspector'
        const appraisal = await readmeInspector.getAppraisal(slug)
        expect(appraisal).toEqual(readmeInspectorScore)
      })
      it('evaluates READMES by GitHub URL', async () => {
        const url = 'https://github.com/commonality/readme-inspector'
        readmeInspectorScore.url = url
        const appraisal = await readmeInspector.getAppraisal(url)
        expect(appraisal).toEqual(readmeInspectorScore)
      })
      it('evaluates READMES by GitHub Enterprise slug')
      it('evaluates READMES by GitHub Enterprise URL')
    })

    describe('HTTP 404', () => {
      it('evaluates READMES by GitHub slug', async () => {
        const slug = 'gregswindle/no-readme'
        const appraisal = await readmeInspector.getAppraisal(slug)
        expect(appraisal).toEqual(noReadmeAppraisal)
      })
      it('evaluates READMES by GitHub URL', async () => {
        const url = 'https://github.com/gregswindle/no-readme'
        const appraisal = await readmeInspector.getAppraisal(url)

        appraisal.error = `Could not determine score for gregswindle/no-readme`
        expect(appraisal).toEqual(noReadmeAppraisal)
      })
      it('evaluates READMES by GitHub Enterprise slug')
      it('evaluates READMES by GitHub Enterprise URL')
    })

    describe('ReadmeAppraisal', () => {
      it('supports destructing', async () => {
        const slug = 'commonality/readme-inspector'
        const {ReadmeAppraisal} = readmeInspector
        const readmeAppraisal = new ReadmeAppraisal()
        const appraisal = await readmeAppraisal.for(slug)

        expect(appraisal.breakdown).toBeDefined()
        expect(appraisal.breakdown.hasLists).toBeDefined()
      })
    })
  })
})
