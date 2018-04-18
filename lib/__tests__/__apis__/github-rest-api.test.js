const readmeInspector = require('../..')

describe('API', () => {
  describe('readmeInspector.getReadmeInfo', () => {
    describe('HTTP 200', () => {
      it('gets README information', async () => {
        const readmeInfo = await readmeInspector.getReadmeInfo(
          'commonality',
          'readme-inspector'
        )
        expect(readmeInfo).toBeDefined()
      })
    })

    describe('HTTP 404', () => {
      it('provides an error message', async () => {
        const readmeInfo = await readmeInspector.getReadmeInfo(
          'gregswindle',
          'no-readme'
        )
        expect(readmeInfo).toBeDefined()
      })
    })
  })
})
