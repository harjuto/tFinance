'use strict'

var Expense = require('../models/expense');
var moment = require('moment');
var config = require('./../config')
var SummaryProcessor = require('../src/summarydataprocessor');
var Q = require('q');


class ExpenseService {

  constructor(){

  }

  static list(){
    return Expense.find().exec();
  }

  static findPendingExpenses(date){
    return Expense.find({
      dueDate: {
        $lte: date
      },
      useNotification: true,
      notified: false
    }).exec();
  }

  static show(id){
    return get(id);
  }

  static create(params){
    var expense = new Expense();
    setProperties(params, expense)
    return expense.save();
  }

  static update(id, params){
    var deferred = Q.defer();
    get(id)
    .then(function(expense){
      setProperties(params, expense)
      expense.save()
      .then(function(expense){
        deferred.resolve(expense)
      })
      .fail(function(err){
        console.log('Error updating: '  + err)
        deferred.reject(err);
      })
    })
    return deferred.promise;
  }

  static summary(start, end){
    var deferred = Q.defer();
    var startMonth = start || 0;
    var startDate = moment().month(parseInt(startMonth,10)).startOf('month');
    var endDate
    if(end){
      endDate = moment().month(parseInt(end,10)).endOf('month');
    }else{
      endDate = startDate.clone().endOf('month')
    }
    Expense.find({
      dueDate: {
        $gt: startDate.toDate(), $lt: endDate.toDate()
      }}
    ).sort({dueDate:1})
    .then((expenses) => {
      console.log(SummaryProcessor.groupByDate(expenses))
      deferred.resolve(expenses);
    })

    return deferred.promise;
  }
}

module.exports = ExpenseService;

function setProperties(params, expense){
  expense.description = params.description;
  expense.amount = params.amount;
  expense.dueDate = moment(params.dueDate, config.date.format).startOf('day').toDate();
  expense.useNotification = params.useNotification;
}

function get(id){
  return Expense.findById(id).exec();
}
