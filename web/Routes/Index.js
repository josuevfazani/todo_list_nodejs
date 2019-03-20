//Requiring the express framework and setting up it's configs
const express = require("express")
const app = express()

const web_routes = require("./Routes.js")
const middleware = require("./Middlewares.js")


//Defining the Port variable
const Port = process.env.PORT || 5000

module.exports = () => {

    //Calling middlewares and web routes
    middleware(app, express)
    web_routes(app, Port)
}
