const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');
const passport = require('passport');

const router = new express.Router();

// this is where we will passing data from the login to the dashboard
router.get('/dashboard', (req, res) => {
  console.log("dashboard data: "+JSON.stringify(req.body, null, 4));
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;