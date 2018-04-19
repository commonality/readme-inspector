/**
 *
 * @module readme-inspector/appraisal-data
 *
 * Represents a numerical score from 0 to 100 for a Github-style README.
 * The intention is to measure complexity, which the authors of the
 * readme-score-api believe to be "generally correlated with quality."
 *
 * AppraisalData does not measure whether one README is absolutely better
 * than another, but it does indicated whether a README is high-quality,
 * needs more work, or somewhere in-between.
 *
 * @typedef AppraisalData
 * @type {object}
 *
 * @prop {Error|null} err=null - A Error object or `null`.
 *
 * @prop {number} score=0 - The sum of all values in the breakdown collection.
 *
 * @prop {string} url=null - The location of the README that was evaluated.
 *
 * @prop {object} breakdown - A collection of README file quality measures.
 * @prop {number} breakdown.cumulativeCodeBlockLength=0 - Amount of code.
 *
 *  * Value of each: 0.0009475244447271192
 *  * Maximum allowed total: 10
 *
 * @prop {number} breakdown.hasLists=0 - Total count of lists.
 *
 *  * Value per list: 10
 *
 * @prop {number} breakdown.lowCodeBlockPenalty=0 - Penalty for lack of code blocks.
 *
 *  * Metric: code-block count
 *  * Rule: if there are fewer than three code blocks, deduct 10 points.
 *
 * @prop {number} breakdown.numberOfCodeBlocks=0 - The total count of source code
 *  examples on the README.md document.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 40
 *
 * @prop {number} breakdown.numberOfGifs=0 - Number of GIF images.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 15
 *
 * @prop {number} breakdown.numberOfImages=0 - Number of images.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 15
 *
 * @prop {number} breakdown.numberOfNonCodeSections=0 - The total count of sections
 *   in the README that do _not_ contain source code.
 *
 *  * Value per section: 5
 *  * Maximum allowed total: 30
 *
 * @example
 * // Successfully appraise a high-quality README.
 *
 * const {ReadmeAppraisal} = require('readme-inspector')
 * const readmeAppraisal = new ReadmeAppraisal()
 * const appraisal = readmeAppraisal.for('commonality/readme-inspector')
 *
 * const WHITESPACE = 2
 * console.log(JSON.stringify(appraisal, null, WHITESPACE))
 * // =>
 * {
 *   "breakdown": {
 *     "cumulativeCodeBlockLength": 10,
 *     "hasLists": 10,
 *     "lowCodeBlockPenalty": 0,
 *     "numberOfCodeBlocks": 40,
 *     "numberOfGifs": 0,
 *     "numberOfImages": 15,
 *     "numberOfNonCodeSections": 30
 *   },
 *   "error": null,
 *   "score": 100,
 *   "url": "commonality/readme-inspector"
 * }
 *
 * @example
 * // Return a `NullAppraisal` for a repository that doesn't
 * // have a README.
 *
 * const readmeInspector = require('readme-inspector')
 * const appraisal =
 *   await readmeInspector.getAppraisal('https://github.com/gregswindle/no-readme')
 *
 * const WHITESPACE = 2
 * console.log(JSON.stringify(appraisal, null, WHITESPACE))
 * // =>
 * {
 *   "breakdown": {
 *     "cumulativeCodeBlockLength": 0,
 *     "hasLists": 0,
 *     "lowCodeBlockPenalty": 0,
 *     "numberOfCodeBlocks": 0,
 *     "numberOfGifs": 0,
 *     "numberOfImages": 0,
 *     "numberOfNonCodeSections": 0
 *   },
 *   "error": "Could not determine score for https://github.com/gregswindle/no-readme",
 *   "score": 0,
 *   "url": null
 * }
 */

const appraisal = {
  'breakdown': {
    'cumulativeCodeBlockLength': 0,
    'hasLists': 0,
    'lowCodeBlockPenalty': 0,
    'numberOfCodeBlocks': 0,
    'numberOfGifs': 0,
    'numberOfImages': 0,
    'numberOfNonCodeSections': 0
  },
  'error': null,
  'score': 0,
  'url': null
}

module.exports = appraisal
