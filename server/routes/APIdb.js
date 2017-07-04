const express = require('express');
const Home = require('mongoose').model('Home');
const Roommate = require('mongoose').model('Roommate');
const Bill = require('mongoose').model('Bill');
const passport = require('passport');

const router = new express.Router();

router.post("/addrm",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
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

router.post("/addbill",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
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