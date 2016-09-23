function CloudConvertClient (cloudConvertApiKey, awsAccessKey, awsSecretAccessKey, awsS3Bucket) {
  if (!cloudConvertApiKey && !process.env.CLOUDCONVERT_API_KEY) {
    throw new Error('CloudConvert api key must be specified')
  }

  if (!awsAccessKey && !process.env.CLOUDCONVERT_API_KEY) {
    throw new Error('AWS access key must be specified')
  }

  if (!awsSecretAccessKey && !process.env.CLOUDCONVERT_API_KEY) {
    throw new Error('AWS secret access key must be specified')
  }

  if (!awsS3Bucket && !process.env.CLOUDCONVERT_API_KEY) {
    throw new Error('AWS S3 bucket must be specified')
  }

  this.cloudConvertApiKey = cloudConvertApiKey || process.env.CLOUDCONVERT_API_KEY
  this.awsAccessKey = awsAccessKey || process.env.AWS_ACCESS_KEY
  this.awsSecretAccessKey = awsSecretAccessKey || process.env.AWS_SECRET_ACCESS_KEY
  this.awsS3Bucket = awsS3Bucket || process.env.AWS_S3_BUCKET
}

module.exports = CloudConvertClient
