const dialogFlow = require('dialogflow');
const config = require('../config/keys');
//const { dialogFlowSessionId } = require('../config/keys');
// Create and initialize session client
const sessionClient = new dialogFlow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectId, config.dialogFlowSessionId);

// module exports - special object - included by default in Node.js application by default
// module variable represents current module 
// expors object exposed as a module
// this file is passed an app variable which is transformed
module.exports = app => {

    // Home page - send object response {"Hello":"There"}
    app.get('/', (req, res) => {
        res.send({'Hey':'There'});
    });

    app.post('/api/df_event_query', (req, res) => {

        // The text query request.
        const request = {
          session: sessionPath,
          queryInput: {
            text: {
              // The query to send to the dialogflow agent
              text: req.body.text,
              // The language used by the client (en-US)
              languageCode: config.dialogFlowSessionLanguageCode,
            },
          },
        };

        // Detect intent endpoint call
        sessionClient
            .detectIntent(request)
            .then(response => {
                console.log('Detected Intent');
                const result = response[0].queryResult;
                console.log(`   Query: ${result.queryText}`);
                console.log(`   Response: ${result.fulfillmentText}`);
                if (result.intent) {
                    console.log(`   Intent: ${result.intent.displayName}`);
                } else {
                    console.log(`   No intent matched`);
                }
            })
            .catch(err => {
                console.error('Error', err);
            });
        res.send({'do':'text query'});
    });

    app.post('/api/df_text_query', (req, res) => {
        res.send({'do':'text query'});
    });

};