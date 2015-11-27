import DashboardTemplate from './dashboard.html';
import dashboardItem from './expense-item.html';

var ExpenseItemDirective = function(){
  return {
    restrict: 'A',
    template: dashboardItem,
    replace: false,
    controller: 'ExpenseItemCtrl',
    controllerAs: 'itemCtrl',
    scope:{
      expense: '='
    }
  }
}

var DashboardContentDirective = function(){
  return {
    restrict:'E',
    template: DashboardTemplate,
    replace:false,
    controller: 'DashboardCtrl',
    controllerAs: 'dashboard',
    scope:{}
  }
}


module.exports = {ExpenseItemDirective, DashboardContentDirective};
