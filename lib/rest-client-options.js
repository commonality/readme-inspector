const {name, version} = require('../package')

const acceptHeaders = [
  'application/vnd.github.mercy-preview+json',
  'application/vnd.github.scarlet-witch-preview+json',
  'application/vnd.github.symmetra-preview+json',
  'application/vnd.github.v3+json'
]

/**
 * All available @octokit/rest.js client options, with default values.
 *
 * @name restClientOptions
 * @prop {string=https://api.github.com} baseUrl - A serialzied URL origin
 *  followed by an _optional_ pathname. Change this value for
 *  GitHub Enterprise requests.
 * @example
 * $ const response = await readmeInspector.api.issues.getForRepo({
 *     baseUrl: 'https://github.evilcorp.com:666/api/v3'
 *   })
 * @see https://nodejs.org/api/url.html#url_url_origin
 * @see https://nodejs.org/api/url.html#url_url_pathname
 * @prop {HTTPHeaders} headers - Headers applying to both requests and responses
 *  but with no relation to the data eventually transmitted in the body.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 * @prop {string} owner - The GitHub (Enterprise) organization or account name.
 * @prop {string} repo - The name of a GitHub (Enterprise) repository.
 * @prop {string} requestMedia - Custom media types to let you choose the format
 *  of the data you wish to receive.
 * @see https://developer.github.com/v3/media/
 * @prop {number=0} timeout - HTTP Header that sets the number of _seconds_ an
 *  idle connection should remain open before it's closed. The default value--0
 *  seconds--means "no timeout."
 * @see https://tools.ietf.org/id/draft-thomson-hybi-http-timeout-01.html#rfc.section.2.1
 */

const restClientOptions = {
  'baseUrl': 'https://api.github.com',
  'headers': {
    'Accept': acceptHeaders.join(','),
    'User-Agent': `commonality/${name} v${version}`
  },
  'owner': null,
  'repo': null,
  'requestMedia': 'application/vnd.github.v3+json',
  'timeout': 0
}

module.exports = restClientOptions
