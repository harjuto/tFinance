var Expense = require('../models/expense');
var express = require('express');
var router = express.Router();
var expenseService = require('./../services/expense');

router.route('/')

  //List
  .get(function(req, res){
    expenseService.list()
    .then(function(data){
      res.json(data)
    })
  })

  //Save
  .post(function(req, res){
    expenseService.create(req.body)
    .then(function(data){
      res.sendStatus(201);
    },function(err){
      res.sendStatus(422);
    })
  });

router.route('/:id')

  //Show
  .get(function(req, res) {
    expenseService.show(req.params.id)
    .then(function(data){
      if(!data){
        res.sendStatus(404);
      }
      res.json(data);
    })
  })

  //Update
  .put(function(req, res) {
    var id = req.params.id;
    var params = req.body;
    expenseService.update(id, params)
    .then(function(data){
      res.sendStatus(200)
    },function(err){
      res.send(422)
    })
  });



module.exports = router;
