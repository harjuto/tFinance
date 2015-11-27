import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Dashboard from './src/pages/dashboard/dashboard';
import Expense from './src/pages/expense/expense';
import QueryService from './src/services/services';
import BootstrapTemplates from 'angular-bootstrap'

angular.module('tFinance', [
  uiRouter,
  Dashboard.name,
  Expense.name,
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
    });

}]);
