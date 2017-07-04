const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.post('/addrm', (req, res) => {
  const newRM = new Roommate(req.body);
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
          console.log("Hey it made it through the api/routes!")
          res.send(newdoc);
        }
      });
    }
  });
});

router.post('/addbill', (req, res) => {
  const newBill = new Bill(req.body);
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
          res.status(200).json({
            data: newdoc
          });
        }
      });
    }
  });
});

module.exports = router;