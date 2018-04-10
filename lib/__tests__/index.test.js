/* eslint node/no-unpublished-require:0 */
// Const noReadmeResponse = require('./__fixtures__/no-readme-response')

const readmeResponse = require('./__fixtures__/readme-response')
const readmeInfo = require('./__fixtures__/readme.json')
const noReadmeInfo = require('./__fixtures__/no-readme.json')
const nullReadmeInfo = require('./__fixtures__/null-readme-info.json')
const Octokit = require('@octokit/rest')
const readmeInspector = require('..')
const sinon = require('sinon')

const noop = () => null

describe('readmeInspector', () => {
  let server = null

  beforeAll(() => {
    Octokit.prototype.authenticate = jest.fn().mockImplementation(noop)
    server = sinon.fakeServer.create()

    /*
     * Server.respondWith('GET', '/repos/foo/bar/readme', readmeResponse)
     * server.respondWith('GET', '/repos/commonality/read-inspector/readme', noReadmeResponse)
     */
  })

  afterAll(() => {
    server.restore()
  })

  describe('getReadmeInfo', () => {
    it('inspects GitHub (Enterprise) repositories for the presence of a root-level README', async () => {
      server.respondWith('GET', '/repos/foo/bar/readme', readmeResponse)
      const info = await readmeInspector.getReadMeInfo({
        'owner': 'foo',
        'ref': 'develop',
        'repo': 'bar'
      })

      expect(info.isPresent).toBe(false)
    })
  })

  describe('check', () => {
    afterEach(() => {
      jest.resetAllMocks().clearAllMocks()
    })

    describe('verifies whether a README exists', () => {
      it('onSuccess, it returns a Promise<ReadmeInfo>', async () => {
        spyOn(readmeInspector, 'getReadMeInfo').and.returnValue(Promise.resolve(readmeInfo))
        const info = await readmeInspector.check()
        expect(info.isPresent).toBeTruthy()
      })

      it('skips scoring if no README is found, ', async () => {
        const readmeInfoNotPresent = Object.assign({
        }, nullReadmeInfo)
        readmeInfoNotPresent.isPresent = false
        spyOn(readmeInspector, 'getReadMeInfo').and.returnValue(Promise.resolve(readmeInfoNotPresent))
        const info = await readmeInspector.check()
        const SCORE = 0
        expect(info.scoreData.score).toBe(SCORE)
      })

      it('onError, it returns a Promise<Error>', async () => {
        spyOn(readmeInspector, 'getReadMeInfo').and.returnValue(Promise.reject(noReadmeInfo))
        const info = await readmeInspector.check()
        expect(info.isPresent).toBeFalsy()
      })
    })

    describe('evaluates the quality of a README and provides a score', () => {
      it('provides a score')
    })
  })

  describe('readme-score', () => {
    it('scores README using CoCoPods readme-score', () => {
      console.log(readmeInspector.api)
      expect(readmeInspector).toBeDefined()
    })
  })
})
