const friendData = require("../data/friends.js")

module.exports = function(app){
    // get route to display json of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
        // This will be used to handle incoming survey results.
        // This route will also be used to handle the compatibility logic.
    })
    
}