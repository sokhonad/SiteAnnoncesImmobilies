var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
// });

router.get('/register', function(req, res) {
    res.render('user/register.twig', { });
})

router.post('/register', function(req, res) {
    
    Account.register(new Account({ username : req.body.username,roles:true }), req.body.password, function(err, account) {
        if (err) {
            return res.render('user/register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('user/login', { user : req.user });
  });

  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
  })

  router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });


module.exports = router;
