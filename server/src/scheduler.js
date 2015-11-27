var schedule = require('node-schedule');
var expenseService = require('./../services/expense');
var nodemailer = require('nodemailer')
var emailJob = undefined;
var config = require('./../config')
var moment = require('moment');

var rule = new schedule.RecurrenceRule();
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.email.account,
        pass: config.email.pass
    }
});
var mailOptions = {
    from: config.email.account, // sender address
    to: config.email.to, // list of receivers
    subject: 'Expense notification', // Subject line
    text: 'You have an expiring expense.', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

rule.second = 1;

module.exports = {
  startJobs: function(){
    schedule.scheduleJob(rule, function (){
      var pendingExpenses = []
      expenseService.findPendingExpenses(new Date())
      .then(function(expenses){
        if(expenses.length == 0){
          return
        }
        var emailcontent = ''
         expenses.forEach(function(expense){
          emailcontent += '<div>' + expense.description + ' Due: ' + moment(expense.dueDate).format(config.date.format) + '</div>'
        })
        mailOptions.html = emailcontent;

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log(new Date() + ': Sending notifications...')
            expenses.forEach(function(expense){
              expense.notified = true
              expense.save();
            })
        });
      })
    });
  },
  stopJobs: function(){

  }
}
