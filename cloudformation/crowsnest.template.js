var lambdaCfn = require('lambda-cfn');

module.exports = lambdaCfn(
  [
    'node_modules/crowsnest-rules-aws/rules/assumeRole.js',
    'node_modules/crowsnest-rules-aws/rules/blacklistedResources.js',
    'node_modules/crowsnest-rules-aws/rules/cloudfrontModifyDelete.js',
    'node_modules/crowsnest-rules-aws/rules/cloudTrail.js',
    'node_modules/crowsnest-rules-aws/rules/whitelistedIAMActions.js'
  ],
  {
    "AWSTemplateFormatVersion": "2010-09-09",
    "Description": "crowsnest"
  }
);
