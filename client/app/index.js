import './style/style.less';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Dashboard from './src/pages/dashboard/dashboard';
import Expense from './src/pages/expense/expense';
import Summary from './src/pages/summary/summary';
import QueryService from './src/services/services';
import BootstrapTemplates from 'angular-bootstrap'

angular.module('tFinance', [
  uiRouter,
  Dashboard.name,
  Expense.name,
  Summary.name,
  BootstrapTemplates
])
.service('QueryService', QueryService)
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('index', {
      url: "/",
      template: '<dashboard></dashboard>'
    })
    .state('create', {
      url: "/create",
      template: '<create-item></create-item>',
    })
    .state('show', {
      url: "/show/:id",
      template: '<show-item></show-item>',
    })
    .state('summary', {
      url:"/summary/",
      template: '<summary></summary>'
    })

}]);
