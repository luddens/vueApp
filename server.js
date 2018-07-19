var express = require('express');
var path = require('path');
 
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator'); 
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var main = require('./routes/main');
var users = require('./routes/users');
var checkout = require('./routes/checkout');

var targetConnection = (process.env.MONGODB_URI || require('./private').connection);

console.log("targetConnection")
console.log(targetConnection)

var options = { keepAlive: 300000, connectTimeoutMS: 30000  }

mongoose.connect(targetConnection, options);

var db = mongoose.connection;

var app = express();

app.use(session({
  secret: 'mySuperSecretSecret',
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'app')));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(function (req, res, next) {
 res.locals.user = req.user || null;
 res.locals.loggedIn = false;
 next();
});

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/', main);
app.use('/users', users); 
app.use('/checkout', checkout); 

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server getting turned up on '+app.get('port'));
});