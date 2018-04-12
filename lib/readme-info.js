const scoreData = require('./score-data')

const nulReadmeInfo = {
  'err': null,
  'isPresent': null,
  'scoreData': scoreData.factory(),
  'value': null
}

const factory = () => Object.assign({
}, nulReadmeInfo)

const readmeInfo = {
  factory
}

module.exports = readmeInfo
