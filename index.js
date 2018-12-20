// top level config ------------------------------------------------------
// require our packages and dependancies 

var express = require('express');
var mustache = require('mustache-express');
var port = 8080;


// app level config ------------------------------------------------------
// create our application and tell it what to do
var app = express();

// mustache set up
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

// import our controllers
var myApp = require('/');

//route controllers
/* var signinController= require('./controllers/signinControllers');
app.use('/signinC', signinController);

var carsController= require('./controllers/carsControllers');
app.use('/carsC', carsController);

var customerontroller= require('./controllers/customerControllers');
app.use('/customerC', customerController);

var signupController= require('./controllers/signupControllers');
app.use('/singupC', signupController);
 */

app.get('/', function(req, res){
  res.render('./index');
})

// start the server!
app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});