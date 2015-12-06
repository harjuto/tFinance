var Expense = require('../models/expense');
var express = require('express');
var router = express.Router();
var ExpenseService = require('./../services/expense');

router.route('/')

  //List
  .get(function(req, res){
    ExpenseService.list()
    .then(function(data){
      res.json(data)
    })
  })

  //Save
  .post(function(req, res){
    ExpenseService.create(req.body)
    .then(function(data){
      res.sendStatus(201);
    },function(err){
      res.sendStatus(422);
    })
  });

router.route('/:id')

  //Show
  .get(function(req, res) {
    ExpenseService.show(req.params.id)
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
    ExpenseService.update(id, params)
    .then(function(data){
      res.sendStatus(200)
    },function(err){
      res.send(422)
    })
  });

router.route('/summary/:start/:end')
  .get(function(req, res){
    ExpenseService.summary(req.params.start, req.params.end)
      .then(function(data){
        res.send(data);
      })
  })


module.exports = router;
