const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');
const passport = require('passport');

const router = new express.Router();

// this is where we will passing data from the login to the dashboard
router.get('/dashboard', (req, res) => {
  // console.log("dashboard data: "+JSON.stringify(req.body, null, 4));
  // needs a unique _id from the home account
  var _id = "5957d45e13b742620c5ec43e";
  Home.find({ "_id": _id })
    .populate(["bills", "roommates"])
    .exec(function(error, doc) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(doc);
      }
  });
});

module.exports = router;