const dotenv = jest.genMockFromModule('dotenv')

const envConfig = {
  'required': {
    'GITHUB_ACCESS_TOKEN': 'MOCK_GITHUB_ACCESS_TOKEN'
  }
}

dotenv.config = jest.fn().mockReturnValue(envConfig)

module.exports = dotenv
