# ChatBot

Tech stack
    Front-End: React
    Back-End: Express, NodeJS, MongoDB
    NLP: DialogFlow(google service)
    Host: Heroku

Building Blocks
    FrontEnd:
        . User experience
        . Get input from user
        . Display response from bot
    DialogFlow:
        . Parse natural language queries
        . Return intents, actions, parameters, and contexts
    BackEnd:
        . Query DialogFlow
        . Handle actions received from DialogFlow
        . Save and retrieve information by querying DB
        . Connect with other API resources
        . Authentication
        . Return response to frontend(bot)    

Development stages
    . Create a DialogFlow agent: DialogFlow( Module with all the intents that our app would need to  recognize. Intents are the pre-defined or developer defined components of agents that process the user requests)
    . Create server side app: NodeJS, Express,
    . Deploy to Heroku: Heroku, GIT
    . Connect server side app and DialogFlow agent. Create endpoints: Google projects, service accounts, API
    . Create frontend: React
    . Support simple message, cards, quick replies: DialogFlow, React
    . Connect chatbot with a databaseMongoDB, Mongoose
    . Deploy to Heroku: Development and Production environment


Dialogflow transforms input string, events, audio to intent and action, parameters and response

Entities extract parameter values from natural language input(helps to get parameters out of input string). They are pre-defined words, objects we need from conversation(user string). Entities are not needed for every possible concept mentioned in the agent, only those needed for the actions for the backend app. User entitites can be redefined on a session ID level allowing for specifice concepts like a user's playlist.

Set-up
    Install node from web
    Install Express:    
        npm init
        npm install express --save
    Install Heroku CLI
    Heroku Deployment
    