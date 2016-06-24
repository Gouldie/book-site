var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// ======================
//      AUTH ROUTES
// ======================

// REGISTER NEW
router.get("/register", function(req, res){
    res.render("auth/register");
});

// REGISTER CREATE
router.post("/register", function(req, res){
    var username = new User({username: req.body.username});
    User.register(username, req.body.password, function(err, user){
        if (err)
        {
            console.log(err);
            req.flash("error", err.message);
            res.render("auth/register");
            return;
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to BookSite " + user.username + ".");
            res.redirect("/books");
        });
    });
});

// LOGIN NEW
router.get("/login", function(req, res){
    res.render("auth/login");
});

// LOGIN CREATE
router.post("/login", passport.authenticate("local", 
        {
            successRedirect: "/books",
            failureRedirect: "/login"
        }),
        function(req, res){
});

// LOGOUT
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You logged out.");
    res.redirect("/books");
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;