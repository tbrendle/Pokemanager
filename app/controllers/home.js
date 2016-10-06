var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  ev = require('../tools/Evaluator.js');
module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var e = ev.getEvaluator(username, password, location, provider);
  var profile  = {};
  var inventory  = {};
  e.initPromise().then(function(){
    console.log("Looking for user profile");
    return e.getUserPromise();
  }).then(function(data){
    console.log("Got user profile");
    profile = data;
    console.log("Looking for inventory");
    return e.getInventoryPromise();
  }).then(function(data){
    console.log("Got inventory");
    inventory = data;
    res.render('index', {
      title: 'Pokemon Go Rater',
      profile: profile,
      inventory: inventory
    });
  }).catch(function(raison) {
    res.send("error"+raison.toString());
  });
});

router.get('/delete/:id', function (req, res, next) {
  var id = req.params.id;
  var e = ev.getEvaluator(username, password, location, provider);
  var profile  = {};
  var inventory  = {};
  e.initPromise().then(function(){
    console.log("Removing pokemon "+id.toString());
    return e.deletePokemonPromise(id);
  }).then(function(data){
    res.redirect('/');
  }).catch(function(raison) {
    res.send("error"+raison.toString());
  });
});

router.get('/deleteAll', function (req, res, next) {
  var e = ev.getEvaluator(username, password, location, provider);
  var profile  = {};
  var inventory  = {};
  e.initPromise().then(function(){
    console.log("Looking for user profile");
    return e.getUserPromise();
  }).then(function(data){
    console.log("Got user profile");
    profile = data;
    console.log("Looking for inventory");
    return e.getInventoryPromise();
  }).then(function(data){
    var inventory = data
    return e.removeBadPromise(inventory);
  }).then(function(){
    res.redirect('/deleteAll')
  }).catch(function(raison) {
    res.redirect('/')
  });
});
