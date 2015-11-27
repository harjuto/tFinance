import showTemplate from './expense.html';
import createTemplate from './expense.html';

var ShowItemDirective = function(){
  return {
    restrict: 'E',
    replace: false,
    template: showTemplate,
    controller: 'ExpenseShowCtrl',
    controllerAs: 'form',
    scope:{
    }
  }
}

var CreateItemDirective = function(){
  return {
    restrict: 'E',
    replace: false,
    template: createTemplate,
    controller: 'ExpenseCreateCtrl',
    controllerAs: 'form',
    scope:{
    }
  }
}


module.exports = {ShowItemDirective, CreateItemDirective};
