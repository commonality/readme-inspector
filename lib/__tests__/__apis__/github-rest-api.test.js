const readmeInspector = require('../..')

describe('API', () => {
  beforeAll(() => {
    readmeInspector.authenticate({
      // eslint-disable-next-line no-process-env
      'token': process.env.GH_TOKEN,
      'type': 'token'
    })
  })

  describe('readmeInspector.getInfo', () => {
    describe('HTTP 200', () => {
      it('gets README information', async () => {
        const readmeInfo = await readmeInspector.getInfo({
          'owner': 'commonality',
          'ref': 'master',
          'repo': 'readme-inspector'
        })
        expect(readmeInfo).toBeDefined()
        expect(readmeInfo.appraisal).toBeDefined()
        const EXPTECTED_SCORE = 0

        expect(readmeInfo.appraisal.score).toBe(EXPTECTED_SCORE)
      })
    })

    describe('HTTP 404', () => {
      it('provides an error message', async () => {
        const readmeInfo = await readmeInspector.getInfo({
          'owner': 'gregswindle',
          'repo': 'no-readme'
        })
        expect(readmeInfo).toBeDefined()
        expect(readmeInfo.appraisal.url).toBeNull()
        expect(readmeInfo.err).not.toBeNull()
        expect(readmeInfo.err.name).toBe('HttpError')
        const HTTP_STATUS_CODE_NOT_FOUND = 404
        expect(readmeInfo.err.code).toBe(HTTP_STATUS_CODE_NOT_FOUND)
        expect(readmeInfo.err.status).toBe('Not Found')
      })
    })
  })
})
