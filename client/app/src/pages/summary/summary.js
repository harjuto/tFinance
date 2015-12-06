import SummaryCtrl from './controllers';
import SummaryDirective from './directives';


module.exports = angular.module('summary', [])
  .controller('SummaryCtrl', SummaryCtrl)
  .directive('summary', SummaryDirective);
