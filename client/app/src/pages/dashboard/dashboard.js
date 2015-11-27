import {ExpenseItemCtrl, DashboardCtrl} from './controllers'
import {ExpenseItemDirective, DashboardContentDirective} from './directives'


var Dashboard = angular.module('dashboard', [])
  .controller('DashboardCtrl', DashboardCtrl)
  .controller('ExpenseItemCtrl', ExpenseItemCtrl)
  .directive('expenseItem', ExpenseItemDirective)
  .directive('dashboard', DashboardContentDirective);

module.exports = Dashboard
