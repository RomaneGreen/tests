'use strict';

module.exports.spit = async event => {
  return {
    statusCode: 200,
    headers: {
      "x-custom-header" : "my custom header value",
      "Access-Control-Allow-Origin": "http://localhost:3002"
  },   
    body: JSON.stringify(
      {
        message: 'spitting out a serverless function for you robofriends typescript!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
