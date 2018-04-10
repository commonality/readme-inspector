/*
 * Const noReadmeFixture = require('./__fixtures__/no-readme.json')
 * const readmeFixture = require('./__fixtures__/readme.json')
 */

const readmeInspector = require('..')

jest.mock('@octokit/rest')

describe('readmeInspector', () => {
  describe('getReadmeInfo', () => {
    it('inspects GitHub (Enterprise) repositories for the presence of a root-level README', async () => {
      const info = await readmeInspector.getReadMeInfo({
        'owner': 'foo',
        'ref': 'develop',
        'repo': 'bar'
      })
      expect(info.isPresent).toBe(false)
    })
  })

  describe('readme-score', () => {
    it('scores README using CoCoPods readme-score', () => {
      expect(readmeInspector).toBeDefined()
    })
  })
})
