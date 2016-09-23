const {expect} = require('chai')
const constants = require('./constants')
const CloudConvertClient = require('../src/CloudConvertClient')

describe('CloudConvertClient', function () {
  beforeEach(function () {
    process.env.CLOUDCONVERT_API_KEY = constants.TEST_ENV_API_KEY
    process.env.AWS_ACCESS_KEY = constants.TEST_ENV_AWS_ACCESS_KEY
    process.env.AWS_SECRET_ACCESS_KEY = constants.TEST_ENV_AWS_SECRET_ACCESS_KEY
    process.env.AWS_S3_BUCKET = constants.TEST_ENV_AWS_S3_BUCKET
  })

  afterEach(function () {
    process.env.CLOUDCONVERT_API_KEY = undefined
    process.env.AWS_ACCESS_KEY = undefined
    process.env.AWS_SECRET_ACCESS_KEY = undefined
    process.env.AWS_S3_BUCKET = undefined
  })

  it('can be instantiated with env variables', function () {
    const cloudConvertClient = new CloudConvertClient()
    expect(cloudConvertClient.cloudConvertApiKey).to.equal(constants.TEST_ENV_API_KEY)
    expect(cloudConvertClient.awsAccessKey).to.equal(constants.TEST_ENV_AWS_ACCESS_KEY)
    expect(cloudConvertClient.awsSecretAccessKey).to.equal(constants.TEST_ENV_AWS_SECRET_ACCESS_KEY)
    expect(cloudConvertClient.awsS3Bucket).to.equal(constants.TEST_ENV_AWS_S3_BUCKET)
  })

  it('can be instantiated with a parameter', function () {
    const cloudConvertClient = new CloudConvertClient(constants.TEST_API_KEY, constants.TEST_AWS_ACCESS_KEY, constants.TEST_AWS_SECRET_ACCESS_KEY, constants.TEST_AWS_S3_BUCKET)
    expect(cloudConvertClient.cloudConvertApiKey).to.equal(constants.TEST_API_KEY)
    expect(cloudConvertClient.awsAccessKey).to.equal(constants.TEST_AWS_ACCESS_KEY)
    expect(cloudConvertClient.awsSecretAccessKey).to.equal(constants.TEST_AWS_SECRET_ACCESS_KEY)
    expect(cloudConvertClient.awsS3Bucket).to.equal(constants.TEST_AWS_S3_BUCKET)
  })
})
