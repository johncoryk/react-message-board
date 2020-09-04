const express = require('express');
const authHelper = require('../services/auth/auth-helpers');
const passport = require('../services/auth/local')
const authRouter = express.Router();

authRouter.get('/register', authHelper.loginRedirect, (req, res) => {
    res.render('auth/register')
})
authRouter.post('/register', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect:'/auth/register',
    failureFlash: true,
}))
authRouter.get('/login', authHelper.loginRedirect, (req, res) => {
    res.render('auth/login')
})
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect:'/auth/login',
    failureFlash: true,
}))
authRouter.get('/logout',(req, res) => {
    req.logout();
    res.redirect('back');
})

module.exports = authRouter;