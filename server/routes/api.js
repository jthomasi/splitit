const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');
const passport = require('passport');

const router = new express.Router();

// ----------------- DASHBOARD ROUTE ------------------ //
// this is where we will passing data from the login to the dashboard
router.post('/dashboard', (req, res) => {
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

// --------------------- ADD ROUTES ----------------------//

router.post("/addrm", (req, res) => {
  const decodedEmail = decodeURIComponent(req.body.homeemail);
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
        Home.findOneAndUpdate({ "email": decodedEmail }, { $push: { "roommates": doc._id } }, { new: true }, function(err, newdoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else {
              res.send(newdoc);
            }
        });
      }
  });
});

router.post("/addbill", (req, res) => {
  const decodedEmail = decodeURIComponent(req.body.homeemail);
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
        Home.findOneAndUpdate({ "email": decodedEmail }, { $push: { "bills": doc._id } }, { new: true }, function(err, newdoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else {
              res.send(newdoc);
            }
        });
      }
  });
});

// ------------------------ DELETE ROUTES ---------------------- //

router.post("/deleterm", (req, res) => {
  // we should store the _id of each roommate as an id value to be passed to this route
  const id = req.body.id;
  Roommate.findByIdAndRemove({ "_id": id }, function(err, newdoc) {
    if (err) {
        res.send(err);
    } else {
        res.send(newdoc);
    }
  });
});

router.post("/deletebill", (req, res) => {
  // we should store the _id of each roommate as an id value to be passed to this route
  const id = req.body.id;
  Bill.findByIdAndRemove({ "_id": id }, function(err, newdoc) {
    if (err) {
        res.send(err);
    } else {
        res.send(newdoc);
    }
  });
});

module.exports = router;