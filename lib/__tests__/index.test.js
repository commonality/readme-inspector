const readme = require('..')

describe('readmeInspector', () => {
  describe('ReadmeInspector', () => {
    it('inspects GitHub (Enterprise) repositories for the presence of a root-level README', () => {
      expect(readme.ReadmeInspector).toBeDefined()
    })
  })

  describe('ScoreMe', () => {
    it('scores README using CoCoPods ScoreMe', () => {
      expect(readme.ScoreMe).toBeDefined()
    })
  })
})
