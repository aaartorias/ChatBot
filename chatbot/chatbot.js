'use strict'
const dialogFlow = require('dialogflow');
const config = require('../config/keys');
//const structjson = require('./structjson');
// use pb-util instead of structjson
const {struct} = require('pb-util');
//const { dialogFlowSessionId } = require('../config/keys');
// Create and initialize session client
const sessionClient = new dialogFlow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectId, config.dialogFlowSessionId);
module.exports = {
    textQuery: async function(text, parameters = {}) {
        // we'll use self to access another module exports functions within current module
        let self = module.exports;
        // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                text: text,
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
      
        // Detect intent endpoint call
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    // handling actoins in future
    handleAction: function(responses) {
        return responses;  
    },

    eventQuery: async function(event, parameters = {}) {
        // we'll use self to access another module exports functions within current module
        let self = module.exports;
        // The text query request.
        // DialogFlow's v2 API uses gRPC
        // we need jsonToStructProto method to convert javascript object to proto struct
        //  download file from https://github.com/meganmcgeee/dialogflow-nodejs-client-v2/blob/master/samples/structjson.js and save it to chatbot folder
        const request = {
            session: sessionPath,
            queryInput: {
              event: {
                name: event,
                //parameters: structjson.jsonToStructProto(parameters),
                parameters: struct.encode(parameters),
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            }
        };
      
        // Detect intent endpoint call
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
}