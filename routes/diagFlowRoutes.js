const chatbot = require('../chatbot/chatbot');

// module exports - special object - included by default in Node.js application by default
// module variable represents current module 
// expors object exposed as a module
// this file is passed an app variable which is transformed
module.exports = app => {

    // Home page - send object response {"Hello":"There"}
    app.get('/', (req, res) => {
        res.send({'Hey':'There'});
    });

    app.post('/api/df_event_query', async (req, res) => {
        let responses =  await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult);
    });

    app.post('/api/df_text_query',  async (req, res) => {
        let responses =  await chatbot.textQuery(req.body.text, req.body.parameters);
        res.send(responses[0].queryResult);
    });

};