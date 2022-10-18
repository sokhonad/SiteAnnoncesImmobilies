
const passport = require('passport')
const accountModel = require("../models/account");


exports.checkAuthenticated=(req, res, next)=>   {
    if (req.isAuthenticated()) {
      res.locals.login= req.isAuthenticated()
      res.locals.currentUser=req.session.passport.user
      return next()
    }
  
    res.redirect('/login')
  }

  exports.roles=(req, res, next)=>   {
    const roles=req.user.roles;
    console.log(roles);
    if (roles) {
      return next()
    }
  
    res.send('vous etez pas autorisée')
  }