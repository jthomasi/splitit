const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');
const passport = require('passport');

const router = new express.Router();

// this is where we will passing data from the login to the dashboard
router.post('/dashboard', (req, res) => {
  console.log("inside api.js should be email: "+req.body.email);
  const decodedEmail = decodeURIComponent(req.body.email);

  Home.findOne({ "email": decodedEmail })
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

router.post("/addrm", (req, res) => {
  const rmData = {
      'name': req.body.name,
      'email': req.body.email,
      'percentage': req.body.percentage
  }
  const newRM = new Roommate(rmData);
  newRM.save(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Otherwise
      else {
        // Find our user and push the new note id into the User's notes array
        Home.findOneAndUpdate({ "email": req.body.homeemail }, { $push: { "roommates": doc._id } }, { new: true }, function(err, newdoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else {
              console.log("Hey it made it through the api/addRM route route and was saved to the db! "+newdoc)
              res.send(newdoc);
            }
        });
      }
  });
});

router.post("/addbill", (req, res) => {
  const billData = {
      'name': req.body.name,
      'cost': req.body.cost,
      'due': req.body.due
  }
  const newBill = new Bill(billData);
  newBill.save(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Otherwise
      else {
        // Find our user and push the new note id into the User's notes array
        Home.findOneAndUpdate({ "email": req.body.homeemail }, { $push: { "bills": doc._id } }, { new: true }, function(err, newdoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else {
              console.log("Hey it made it through the api/addbill route and was saved to the db! "+newdoc)
              res.send(newdoc);
            }
        });
      }
  });
});

module.exports = router;