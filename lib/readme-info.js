const appraisalData = require('./appraisal-data')

/**
 *
 * @module readme-inspector/readme-info
 *
 * Provides information about a README document.
 *
 * @typedef ReadmeInfo
 * @type {object}
 *
 * @prop {AppraisalData} appraisal - Represents the
 *   quantifiable quality of a README file.
 * @prop {Error} err=null - Provides `Error` information
 *   in case of exceptions.
 * @prop {boolean} isPresent - Declares whether a README
 *   document was found.
 * @prop {external:Contents} value - A README `Contents`
 *   instance.
 *
 * @example
 * {
 *   "appraisal":{
 *     "breakdown":{
 *       "cumulativeCodeBlockLength":10,
 *       "hasLists":10,
 *       "lowCodeBlockPenalty":0,
 *       "numberOfCodeBlocks":40,
 *       "numberOfGifs":0,
 *       "numberOfImages":15,
 *       "numberOfNonCodeSections":30
 *     },
 *     "error":null,
 *     "score":100,
 *     "url":null
 *   },
 *   "err":null,
 *   "isPresent":true,
 *   "value":{
 *     "name":"README.md",
 *     "path":"README.md",
 *     "sha":"7a4be917e2f73fe701170753ef31f278936a7499",
 *     "size":37410,
 *     "url":"https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
 *     "html_url":"https://github.com/commonality/readme-inspector/blob/master/README.md",
 *     "git_url":"https://api.github.com/repos/commonality/readme-inspector/git/blobs/7a4be917e2f73fe701170753ef31f278936a7499",
 *     "download_url":"https://raw.githubusercontent.com/commonality/readme-inspector/master/README.md",
 *     "type":"file",
 *     "content":"...",
 *     "encoding":"base64",
 *     "_links":{
 *       "self":"https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
 *       "git":"https://api.github.com/repos/commonality/readme-inspector/git/blobs/7a4be917e2f73fe701170753ef31f278936a7499",
 *       "html":"https://github.com/commonality/readme-inspector/blob/master/README.md"
 *     }
 *   }
 * }
 */

const readmeInfo = {
  'appraisal': Object.assign({
  }, appraisalData),
  'err': null,
  'isPresent': null,
  'value': null
}

module.exports = readmeInfo
