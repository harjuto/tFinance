var mongoose = require('mongoose');
var express    = require('express');
var app        = express();
var config     = require('./config');
var path       = require('path');
var bodyParser = require('body-parser');
var expenseCtrl = require('./controllers/expense');
var scheduler = require('./src/scheduler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../client/dist')));

//Index route
app.get('/', (req, res) => {
   res.sendFile('index.html', {
     root: '../client'
   });
});

app.use('/api/expenses/', expenseCtrl);

//Connect to database
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to database')
});

//Start server
app.listen(config.port);
console.log('Server started at: ' + config.port);

//Start scheduler?
if(process.argv[2] === '-notifications'){
  console.log('Notification jobs started.')
  scheduler.startJobs();
}
