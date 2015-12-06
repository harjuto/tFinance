import template from './summary.html'

var SummaryDirective = function(){
  return {
    restrict: 'E',
    replace: false,
    template: template,
    scope:{},
    controller: "SummaryCtrl as summary"
  }
}


module.exports = SummaryDirective;
