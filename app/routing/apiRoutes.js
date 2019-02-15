var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.json(res);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        res.json("hola mundo");
    });
}

