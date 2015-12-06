import {ExpenseItemCtrl, DashboardCtrl} from './controllers'
import {ExpenseItemDirective, DashboardContentDirective} from './directives'


module.exports = angular.module('dashboard', [])
  .controller('DashboardCtrl', DashboardCtrl)
  .controller('ExpenseItemCtrl', ExpenseItemCtrl)
  .directive('expenseItem', ExpenseItemDirective)
  .directive('dashboard', DashboardContentDirective);
