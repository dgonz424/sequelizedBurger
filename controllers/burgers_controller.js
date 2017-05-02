var db = require("../models/");

var express = require("express");

var router = express.Router();



router.get("/", function (req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
db.burgers.findAll().then(function(dbBurgers) {
      var hbsObject = {burger: dbBurgers};
      return res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
  db.burgers.create({
    burger_name: req.body.burger_name
  }).then(function(dbBurgers) {
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
