const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank.js");

//const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];

router.get("/", function(req, res) {
  //res.render("index", { title: "Hall of Fame", people: people });
  let tweets = tweetBank.list();
  res.render("index", { tweets: tweets });
});

module.exports = router;
