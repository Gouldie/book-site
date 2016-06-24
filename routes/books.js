var express = require("express");
var router = express.Router();
var Book = require("../models/book");
var middleware = require("../middleware");

// ======================
//   BOOK ROUTES
// ======================

// BASE
router.get("/", function(req, res){
    res.redirect("/books");
});

// INDEX
router.get("/books", function(req, res){
    Book.find({}, function(err, books){
       if (err)
       {
           console.log(err);
       }
       else
       {
           res.render("books/index", {books: books});
       }
    });
});

// CREATE
router.post("/books", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var author = req.body.author;
    var image = req.body.image;
    var desc = req.body.description;
    var postedBy = {
        id: req.user._id,
        username: req.user.username
    };
    var book = {name: name, author: author, image: image, description: desc, postedBy: postedBy};
    
    Book.create(book, function(err, book){
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("Book Added:");
            console.log(book);
            res.redirect("/books");
        }
    });
});

// NEW
router.get("/books/new", middleware.isLoggedIn, function(req, res){
   res.render("books/new"); 
});


// SHOW
router.get("/books/:id", function(req, res){
    Book.findById(req.params.id).populate("comments").exec(function(err, book){
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.render("books/show", {book: book});
        }
    });
});

// EDIT
router.get("/books/:id/edit", middleware.checkBookOwnership, function(req, res){
    Book.findById(req.params.id, function(err, book){
        res.render("books/edit", {book: book});
    });
});

// UPDATE
router.put("/books/:id", middleware.checkBookOwnership, function(req, res){
    Book.findByIdAndUpdate(req.params.id, req.body.book, function(err, book){
        if (err)
        {
            console.log(err);
            res.redirect("/books");
        }
        else
        {
            res.redirect("/books/" + req.params.id);
        }
    });
});

// DESTROY
router.delete("/books/:id", middleware.checkBookOwnership, function(req, res){
    Book.findByIdAndRemove(req.params.id, function(err){
        if (err)
        {
            console.log(err);
            res.redirect("/books");
        }
        else
        {
            res.redirect("/books");
        }
    });
});

module.exports = router;