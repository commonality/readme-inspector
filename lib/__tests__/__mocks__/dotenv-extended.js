const dotenvExtended = jest.genMockFromModule('dotenv-extended')

const envConfig = {
  'API_ENDPOINT_README_SCORE':
      'http://readme-score-api.herokuapp.com/score.json?url=',
  'CODACY_PROJECT_TOKEN': 'MOCK_CODACY_PROJECT_TOKEN',
  'GA_README_INSPECTOR': 'UA-111111111-1',
  'GH_TOKEN': 'MOCK_GH_TOKEN'
}

dotenvExtended.config = jest.fn().mockReturnValue(envConfig)
dotenvExtended.load = jest.fn().mockReturnValue(envConfig)

module.exports = dotenvExtended
