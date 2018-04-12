/* eslint node/no-unpublished-require:0 */
const nullReadmeInfo = require('./__fixtures__/null-readme-info.json')

// Const Octokit = require('@octokit/rest')

const readmeInfo = require('./__fixtures__/http/200/readme-info')
const readmeInspector = require('..')
const ReadmeScore = require('../readme-score')

// Const responseNoReadmeInfo = require('./__fixtures__/http/404/response-readme-info')

// Const responseReadmeInfo = require('./__fixtures__/http/200/response-readme-info')

const noop = () => null

describe('readmeInspector\'s', () => {
  beforeAll(() => {
    readmeInspector.api.authenticate = jest.fn().mockImplementation(noop)
  })

  afterAll(() => {
    jest.resetAllMocks().clearAllMocks()
  })

  describe('.authenticate (see https://git.io/vxYim)', () => {
    let credentials = {
    }
    const FIRST = 0

    afterEach(() => {
      credentials = {
      }
      jest.resetAllMocks().clearAllMocks()
    })

    it('expects a personal access "token"--stored in process.env.GITHUB_ACCESS_TOKEN--by default', () => {
      expect(readmeInspector.authenticate).toBeDefined()

      credentials = {
        'token': 'MOCK_GITHUB_ACCESS_TOKEN', 'type': 'token'
      }
      readmeInspector.authenticate()

      expect(readmeInspector.api.authenticate).toHaveBeenCalled()
      expect(readmeInspector.api.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "basic" credentials', () => {
      credentials = {
        'password': 'password', 'type': 'basic', 'username': 'yourusername'
      }
      readmeInspector.authenticate(credentials)
      expect(readmeInspector.api.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "oauth" credentials', () => {
      credentials = {
        'token': 'secrettoken123', 'type': 'oauth'
      }
      readmeInspector.authenticate(credentials)
      expect(readmeInspector.api.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "oauth key/secret" credentials', () => {
      credentials = {
        'key': 'client_id', 'secret': 'client_secret', 'type': 'oauth'
      }
      readmeInspector.authenticate(credentials)
      expect(readmeInspector.api.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "app" credentials', () => {
      credentials = {
        'token': 'secrettoken123', 'type': 'integration'
      }
      readmeInspector.authenticate(credentials)
      expect(readmeInspector.api.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })
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
      it('"getReadmeScore" method', () => {
        expect(readmeInspector.getReadmeScore).toBe(ReadmeScore.for)
      })
    })
  })
})
