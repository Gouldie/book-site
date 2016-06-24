var express = require("express");
var router = express.Router();
var Book = require("../models/book");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// ======================
//    COMMENTS ROUTES
// ======================

// NEW
router.get("/books/:id/comments/new", middleware.isLoggedIn, function(req, res){
    Book.findById(req.params.id, function(err, book){
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.render("comments/new", {book: book});
        }
    })
});

// CREATE
router.post("/books/:id/comments", middleware.isLoggedIn, function(req, res){
    Book.findById(req.params.id, function(err, book){
        if (err)
        {
            console.log(err);
            res.redirect("/books");
        }
        else
        {
            Comment.create(req.body.comment, function(err, comment){
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    // Associate comment with user
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    // Associate comment with book
                    book.comments.push(comment);
                    book.save();
                    req.flash("success", "Successfully added comment.");
                    res.redirect("/books/" + book._id);
                }
            });
        }
    });
});

// EDIT
router.get("/books/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment){
        if (err)
        {
            res.redirect("back");
        }
        else
        {
            res.render("comments/edit", {comment: comment, book_id: req.params.id});
        }
    });
});

// UPDATE
router.put("/books/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment){
        if (err)
        {
            res.redirect("back");
        }
        else
        {
            res.redirect("/books/" + req.params.id);
        }
    });
});

// DESTROY
router.delete("/books/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
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

module.exports = router;