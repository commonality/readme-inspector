const readmeInfo = require('../readme-info.js')
const nullReadmeInfo = require('./__fixtures__/null-readme-info.json')

describe('readmeInfo', () => {
  describe('factory method', () => {
    it('generates a NullReadmeInfo object', () => {
      expect(readmeInfo.factory()).toEqual(nullReadmeInfo)
    })
  })
})
