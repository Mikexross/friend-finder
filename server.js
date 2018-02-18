const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from constious URLs.
// require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});