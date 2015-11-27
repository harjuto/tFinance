class DashboardCtrl {
  constructor(QueryService) {
      QueryService.list()
      .then( (response) =>
        this.expenses = response.data
      )
  }
}

DashboardCtrl.$inject = ['QueryService'];


class ExpenseItemCtrl {
  constructor($scope){
    this.expense = $scope.expense
  }
  
}
ExpenseItemCtrl.$inject = ['$scope'];

module.exports = {DashboardCtrl, ExpenseItemCtrl};
