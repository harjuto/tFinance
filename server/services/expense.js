var Expense = require('../models/expense');
var moment = require('moment');
var config = require('./../config')
var Q = require('q');

module.exports = {

    list: function(){
      return Expense.find().exec();
    },

    findPendingExpenses: function(date){
      return Expense.find({
        dueDate: {
          $lt: date
        },
        useNotification: true,
        notified:false
      }).exec();
    },

    show: function(id){
      return get(id);
    },

    create: function(params){
      var expense = new Expense();
      setProperties(params, expense)
      return expense.save();
    },

    update: function(id, params){
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
}
function setProperties(params, expense){
  expense.description = params.description;
  expense.amount = params.amount;
  expense.dueDate = moment(params.dueDate, config.date.format).startOf('day').toDate();
  expense.useNotification = params.useNotification;
}

function get(id){
  return Expense.findById(id).exec();
}
