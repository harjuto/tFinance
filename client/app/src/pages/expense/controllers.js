class ExpenseShowCtrl{
  constructor(QueryService, $stateParams, $state){
    this.$state = $state;
    this.QueryService = QueryService;
    QueryService.get($stateParams.id)
    .then( (response) => {
      this.expense = response.data
      this.expense.dueDate = new Date(this.expense.dueDate);
      }
    )
  }

  //Update
  submit(){
    this.QueryService.update(this.expense)
    .then( (response) =>
      this.$state.go('index')
    )
  }
}


ExpenseShowCtrl.$inject = ['QueryService', '$stateParams', '$state'];

class ExpenseCreateCtrl {
  constructor(QueryService, $state){
    this.$state = $state;
    this.QueryService = QueryService;
    this.expense = {};
  }

  //Save
  submit(){
    this.QueryService.save(this.expense)
    .then( (response) =>
      this.$state.go('index')
    )
  }
}

ExpenseCreateCtrl.$inject = ['QueryService', '$state'];



module.exports = {ExpenseShowCtrl, ExpenseCreateCtrl};
