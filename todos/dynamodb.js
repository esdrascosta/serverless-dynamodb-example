'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {

  AWS.config.update({ 
    accessKeyId: "localAccessKey", 
    secretAccessKey: "localSecretAccessKey", 
    region: "localRegion" 
  });
  
  options = {
    endpoint: 'http://localhost:8000',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
