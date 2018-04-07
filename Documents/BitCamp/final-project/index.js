var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var _ = require('underscore');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

// Endpoints
var logged_in = true
var current_user = {
  username: "temp"
}

function login() {
  logged_in = true
}

// JSON object of current user purchases retreived from database
var _DATA = {}

app.get('/', function(req, res) { /* home page */
  //home page stuff
  if (logged_in){
    res.render('loggedIn', {});
  }
  else {
    res.render('notLoggedIn', {});
  }
})

app.get('/Register', function(req, res) { /* registration page */
  res.render('register', {});
})

app.get('/DonationFeatures', function(req, res) { /* registration page */
  res.render('donationFeatures', {});
})

app.get('/LoginPage', function(req, res) { /* home page */
  //login page stuff
  res.render('login', {});
})

app.listen(3000, function() {
    console.log('Charity Web App (DRAFT) listening on port 3000!');
});
