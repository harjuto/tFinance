import moment from 'moment';

class SummaryCtrl{
  constructor(QueryService){
    this.month = moment().format('MMMM')
    QueryService.summary(moment().month(), moment().month())
    .then((response) => {
      console.log(response.data);

      this.expenses = response.data;
      this.total = 0;
      this.expenses.forEach((expense) => {
        this.total += expense.amount;
      })
      this.total = this.total.toFixed(2);
    })
    .then(() => {
      QueryService.summary(0, 11)
      .then((response) => {
        var data = new google.visualization.DataTable();
          data.addColumn('date', 'X');
          data.addColumn('number', '€');
          var elements = response.data.map(function(expense){
            var date = moment(expense.dueDate).format('YYYY.MM.DD')
            return [new Date(date), expense.amount]
          })
          data.addRows(elements);

          var options = {
            width: 500,
            height: 300,
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Total'
            }
          };

          var chart = new google.visualization.LineChart(document.getElementById('chart-container'));

          chart.draw(data, options);
      })

    })
  }

}
SummaryCtrl.$inject = ['QueryService'];

module.exports = SummaryCtrl;
