const dotenv = jest.genMockFromModule('dotenv')

const envConfig = {
  'required': {
    'API_ENDPOINT_README_SCORE':
      'http://readme-score-api.herokuapp.com/score.json?url=',
    'GA_README_INSPECTOR': 'UA-111111111-1',
    'GH_TOKEN': 'MOCK_GITHUB_ACCESS_TOKEN'
  }
}

dotenv.config = jest.fn().mockReturnValue(envConfig)

module.exports = dotenv
