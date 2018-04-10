/**
 * @description
 * Provides a numerical score from 0 to 100 for a Github-style README.
 * The intention is to measure complexity, which the authors of the
 * readme-score-api believe to be "generally correlated with quality."
 *
 * ScoreData does not measure whether one README is absolutely better
 * than another, but it does indicated whether a README is high-quality,
 * needs more work, or somewhere in-between.
 *
 * @interface ScoreData
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

const scoreData = {
  factory
}

module.exports = scoreData
