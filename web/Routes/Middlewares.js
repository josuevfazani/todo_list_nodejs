const bodyParser = require("body-parser")

module.exports =  (app,express) => {
  //body-parser config
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  //Serving static files and creating a virtual route to them.
  app.use('/static', express.static(Path+'/Public'))

  //Setting EJS as the view engine
  app.set('view engine', 'ejs')
}
