var db = require("../models");

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
db.Burgers.findAll({
    include: [db.Burgers]
    }).then(function(dbAuthor) {
      res.json(dbBurgers);
    });
});

router.post("/", function(req, res) {
  db.Burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burgers.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.Burgers.destroy(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
