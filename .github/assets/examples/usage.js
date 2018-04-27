// Load all .env variables before anything else.

const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

// Import readme-inspector.

const readmeInspector = require('readme-inspector')

// Recommended: authenticate to avoid rate limts.

readmeInspector.authenticate({
  token: envConfig.GH_TOKEN,
  type: 'oauth'
})

// Verify that the repository with the slug
// gregswindle/github-resource-converter
// 1. Has a README, and
// 2. Score the README for quality.

const info = await readmeInspector.check({
  owner: 'gregswindle',
  repo:  'github-resource-converter'
})

// Display the resulting readmeInfo as a
// JSON string.

const WHITESPACE = 2
console.log(JSON.stringify(results, null, WHITESPACE))
// =>
/*
{
  "appraisal": {
    "breakdown": {
      "cumulativeCodeBlockLength": 0,
      "hasLists": 0,
      "lowCodeBlockPenalty": 0,
      "numberOfCodeBlocks": 0,
      "numberOfGifs": 0,
      "numberOfImages": 0,
      "numberOfNonCodeSections": 0
    },
    "error": null,
    "score": 0,
    "url": null
  },
  "error": null,
  "isPresent": true,
  "value": {
    "name": "README.md",
    "path": "README.md",
    "sha": "4769744aad57ff3e9aac2df603795c4d10fcdc31",
    "size": 36877,
    "url": "https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
    "html_url": "https://github.com/commonality/readme-inspector/blob/master/README.md",
    "git_url": "https://api.github.com/repos/commonality/readme-inspector/git/blobs/4769744aad57ff3e9aac2df603795c4d10fcdc31",
    "download_url": "https://raw.githubusercontent.com/commonality/readme-inspector/master/README.md",
    "type": "file",
    "content": "{base64-encoding-of-readme-markdown}",
    "encoding": "base64",
    "_links": {
      "self": "https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
      "git": "https://api.github.com/repos/commonality/readme-inspector/git/blobs/4769744aad57ff3e9aac2df603795c4d10fcdc31",
      "html": "https://github.com/commonality/readme-inspector/blob/master/README.md"
    }
  }
}
*/
