'use strict'
require('dotenv').config({path:__dirname+'/../.env'})

const secretsManagers = {
  'yc_credential': process.env.YC_CREDENTIAL,
  'delosi_credential': process.env.DELOSI_CREDENTIAL,
  'yc_store_credential': process.env.YC_STORE_CREDENTIAL,
  'yc_customer_credential': process.env.YC_CUSTOMER_CREDENTIAL,
  'mail_config': process.env.MAIL_CONFIG,
  'hutbot_credential': process.env.HUTBOT_CREDENTIAL,
  'contentful_credential': process.env.CONTENTFUL_CREDENTIAL,
  'email_credential': process.env.EMAIL_CREDENTIAL,
  'navision_credential': process.env.NAVISION_CREDENTAL,
}

module.exports = {
  get: (req, res) => {
    const credential = req.query.secretId ?? '';
    const output = {
      ARN: 'arn:aws:secretsmanager:ap-southeast-1:150820684677:secret:yc_credential-cydebk',
      CreatedDate: '2023-03-14T14:02:37.554Z',
      Name: credential,
      SecretBinary: null,
      SecretString: secretsManagers[`${credential}`],
      VersionId: '704ef73d-1f74-4b6f-8ae0-d1890bf037f1',
      ResultMetadata: {}
    }
    console.log(secretsManagers[`${credential}`]);
    res.json(output)
  }
}
