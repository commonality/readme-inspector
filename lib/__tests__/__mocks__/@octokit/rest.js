const Octokit = jest.genMockFromModule('@octokit/rest')

const noop = () => null

Octokit.prototype.authenticate = jest.fn().mockImplementation(noop)

module.exports = Octokit
