/*
 * Const noReadme = require('./__fixtures__/no-readme.json')
 * const readme = require('./__fixtures__/readme.json')
 */

const Octokit = require('@octokit/rest')
const ReadmeInspector = require('../readme-inspector')

// Const weakReadme = require('./__fixtures__/weak-readme.json')

describe('ReadmeInspector', () => {
  const params = {
    'noReadme': {
      'owner': 'gregswindle',
      'repo': 'no-readme'
    },
    'weakReadme': {
      'owner': 'RolandasRazma',
      'repo': 'RRFPSBar'
    },
    'withReadme': {
      'owner': 'gregswindle',
      'repo': 'github-resource-converter'
    }
  }

  describe('#authenticate (see https://git.io/vxYim)', () => {
    let credentials = {
    }
    let inspector = null
    const FIRST = 0

    beforeEach(() => {
      inspector = new ReadmeInspector(params.withReadme)
    })

    afterEach(() => {
      credentials = {
      }
      inspector = null
      jest.resetAllMocks()
      jest.clearAllMocks()
    })

    it('expects a personal access "token"--stored in process.env.GITHUB_ACCESS_TOKEN--by default', () => {
      expect(inspector.authenticate).toBeDefined()

      credentials = {
        'token': 'MOCK_GITHUB_ACCESS_TOKEN', 'type': 'token'
      }
      inspector.authenticate()

      expect(Octokit.prototype.authenticate).toHaveBeenCalled()

      // Expect(Octokit.prototype.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "basic" credentials', () => {
      credentials = {
        'password': 'password', 'type': 'basic', 'username': 'yourusername'
      }
      inspector.authenticate(credentials)
      expect(Octokit.prototype.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "oauth" credentials', () => {
      credentials = {
        'token': 'secrettoken123', 'type': 'oauth'
      }
      inspector.authenticate(credentials)
      expect(Octokit.prototype.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "oauth key/secret" credentials', () => {
      credentials = {
        'key': 'client_id', 'secret': 'client_secret', 'type': 'oauth'
      }
      inspector.authenticate(credentials)
      expect(Octokit.prototype.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })

    it('accepts "app" credentials', () => {
      credentials = {
        'token': 'secrettoken123', 'type': 'integration'
      }
      inspector.authenticate(credentials)
      expect(Octokit.prototype.authenticate.mock.calls[FIRST]).toContainEqual(credentials)
    })
  })

  describe('detects whether a GitHub (Enterprise) repo has a README', () => {
    it('attempts to fetch a README', () => {
      const inspector = new ReadmeInspector(params.withReadme)
      expect(inspector.url).toContain('gregswindle/github-resource-converter')
    })
  })

  describe('scores the README', () => {
    it('scores a readme')
  })
})
