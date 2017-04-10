var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('../models/user');


router.use(require('express-session')({
  secret: "Rusty piece of shit",
  resave: false,
  saveUnitialized: false
}))
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/');
}

// ################ Auth Routes ####################

router.get('/register', function(req, res){
  res.render('sign-up');
});

router.post('/sign-up', function(req, res){
  var username = req.body.username
  var password = req.body.password
  User.register(new User({username: username}), password, function(err, user){
      if(err){
        console.log(err);
        return res.render('sign-up');
      }else{
        passport.authenticate('local')(req, res, function(){
          res.redirect('/secret');
        });
      }
    })
});


router.get('/login', function(req, res){
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}),
function(req, res){

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/secret', isLoggedIn, function(req, res){
  res.render('secret')
})

module.exports = router;
