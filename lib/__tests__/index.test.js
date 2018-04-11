/* eslint node/no-unpublished-require:0 */
const nullReadmeInfo = require('./__fixtures__/null-readme-info.json')
const Octokit = require('@octokit/rest')
const readmeInfo = require('./__fixtures__/http/200/readme-info')
const readmeInspector = require('..')
const ReadmeScore = require('../readme-score')

// Const responseNoReadmeInfo = require('./__fixtures__/http/404/response-readme-info')

// Const responseReadmeInfo = require('./__fixtures__/http/200/response-readme-info')

const noop = () => null

describe('readmeInspector\'s', () => {
  beforeAll(() => {
    Octokit.prototype.authenticate = jest.fn().mockImplementation(noop)
  })

  afterAll(() => {
    jest.resetAllMocks().clearAllMocks()
  })

  describe('"getReadmeInfo" method', () => {
    it('inspects GitHub (Enterprise) repositories for the presence of a root-level README', async () => {
      readmeInspector.api.repos.getReadme = jest
        .fn()
        .mockRejectedValueOnce({
          'data': nullReadmeInfo
        })
      const info = await readmeInspector.getReadmeInfo({
        'owner': 'foo',
        'ref': 'develop',
        'repo': 'bar'
      })
      expect(info.isPresent).toBe(false)
    })

    jest.resetAllMocks()

    it('inspects GitHub (Enterprise) repositories for the presence of a root-level README', async () => {
      readmeInspector.api.repos.getReadme = jest
        .fn()
        .mockResolvedValueOnce({
          'data': readmeInfo
        })
      const info = await readmeInspector.getReadmeInfo({
        'owner': 'commonality',
        'repo': 'readme-inspector'
      })
      expect(info.isPresent).toBe(true)
    })

    jest.resetAllMocks()
  })

  describe('"check" method', () => {
    afterEach(() => {
      jest.resetAllMocks().clearAllMocks()
    })

    describe('verifies whether a README exists', () => {
      it('and returns a Promise<ReadmeInfo> when a README is found', async () => {
        spyOn(readmeInspector, 'getReadmeInfo').and.returnValue(Promise.resolve(readmeInfo))
        const info = await readmeInspector.check()
        expect(info.isPresent).toBeTruthy()
      })

      it('skips scoring if no README is found, ', async () => {
        const readmeInfoNotPresent = Object.assign({
        }, nullReadmeInfo)
        readmeInfoNotPresent.isPresent = false
        spyOn(readmeInspector, 'getReadmeInfo').and.returnValue(Promise.resolve(readmeInfoNotPresent))
        const info = await readmeInspector.check()
        const SCORE = 0
        expect(info.scoreData.score).toBe(SCORE)
      })

      it('and returns a Promise<Error> when no README was found', async () => {
        const info = await readmeInspector.getReadmeInfo({
          'owner': 'foo',
          'ref': 'develop',
          'repo': 'bar'
        })

        expect(info.isPresent).toBe(false)
      })
    })

    describe('evaluates the quality of a README and provides a score with the', () => {
      it('"readmeScore.for" method', () => {
        expect(readmeInspector.readmeScore.for).toBe(ReadmeScore.for)
      })
    })
  })
})
