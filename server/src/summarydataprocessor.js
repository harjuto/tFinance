'use strict';

var _ = require('lodash')

class SummaryDataProcessor{
  constructor(){

  }

  static groupByDate(expenses){
    return _.chain(expenses)
      .groupBy( e => e.dueDate.getMonth())
      .transform(res, e => console.log(res + ' // ' + e))
      .value()
  }
}

module.exports = SummaryDataProcessor;
