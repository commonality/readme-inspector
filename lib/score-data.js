/**
 * @memberOf module:readme-inspector
 * @inner
 * @private
 */

const nullScoreData = {
  'breakdown': {
    'cumulativeCodeBlockLength': 0,
    'hasLists': 0,
    'lowCodeBlockPenalty': 0,
    'numberOfCodeBlocks': 0,
    'numberOfGifs': 0,
    'numberOfImages': 0,
    'numberOfNonCodeSections': 0
  },
  'err': null,
  'score': 0,
  'url': null
}

const factory = () => Object.assign({
}, nullScoreData)

/**
 * Represents a numerical score from 0 to 100 for a Github-style README.
 * The intention is to measure complexity, which the authors of the
 * readme-score-api believe to be "generally correlated with quality."
 *
 * ScoreData does not measure whether one README is absolutely better
 * than another, but it does indicated whether a README is high-quality,
 * needs more work, or somewhere in-between.
 *
 * @see https://github.com/clayallsopp/readme-score/blob/master/lib/readme-score/document/score.rb#L5
 *
 * @prop {object} breakdown - A collection of README file quality measures.
 * @prop {number} breakdown.cumulativeCodeBlockLength - Amount of code.
 *
 *  * Value of each: 0.0009475244447271192
 *  * Maximum allowed total: 10
 *
 * @prop {number} breakdown.hasLists - Total count of lists.
 *
 *  * Value per list: 10
 *
 * @prop {number} breakdown.lowCodeBlockPenalty - Penalty for lack of code blocks.
 *
 *  * Metric: code-block count
 *  * Rule: if there are fewer than three code blocks, deduct 10 points.
 *
 * @prop {number} breakdown.numberOfCodeBlocks - The total count of source code
 *  examples on the README.md document.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 40
 *
 * @prop {number} breakdown.numberOfGifs - Number of GIF images.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 15
 *
 * @prop {number} breakdown.numberOfImages - Number of images.
 *
 *  * Value per code block: 5
 *  * Maximum allowed total: 15
 *
 * @prop {number} breakdown.numberOfNonCodeSections - The total count of sections
 *   in the README that do _not_ contain source code.
 *
 *  * Value per section: 5
 *  * Maximum allowed total: 30
 *
 * @prop {Error|null} err - A Error object or `null`.
 * @prop {number} score - The sum of all values in the breakdown collection.
 * @prop {string} url - The location of the README that was evaluated.
 *
 * @memberOf module:readme-inspector
 * @inner
 * @private
 */

const scoreData = {

  factory
}

module.exports = scoreData
