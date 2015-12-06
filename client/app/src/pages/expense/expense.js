import ExpenseTemplate from './expense.html';
import {ShowItemDirective, CreateItemDirective} from './directives';
import {ExpenseShowCtrl, ExpenseCreateCtrl} from './controllers';
// import DateTime from 'datetime'

module.exports = angular.module('expense', [])
  .controller('ExpenseShowCtrl', ExpenseShowCtrl)
  .controller('ExpenseCreateCtrl', ExpenseCreateCtrl)
  .directive('showItem', ShowItemDirective)
  .directive('createItem', CreateItemDirective);
