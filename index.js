//Saving the directory root
global.Path = __dirname
const Routes = require("./web/Routes/Index.js");
const Models = require("./web/Models/Index.js");

//Calling the Routes from web/Controllers/Routes.js
Routes()
Models.connect()
Models.db.close()
