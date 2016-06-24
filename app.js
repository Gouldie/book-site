var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Book = require("./models/book"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    seedDB = require("./seeds");
    
var bookRoutes = require("./routes/books"),
    commentRoutes = require("./routes/comments"),
    authRoutes = require("./routes/auth");

//mongoose.connect("mongodb://localhost/book_site");
mongoose.connect(process.env.DATABASEURL);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

// CONFIG

app.use(require("express-session")({
    secret: "secret phrase",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(bookRoutes);
app.use(commentRoutes);
app.use(authRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Book Site listening...");
});