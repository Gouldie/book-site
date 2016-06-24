var Book = require("../models/book");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
};

middlewareObj.checkBookOwnership = function(req, res, next){
    if (req.isAuthenticated())
    {
        Book.findById(req.params.id, function(err, book){
        if (err)
        {
            console.log(err);
            req.flash("error", "Book not found. May have been removed from the database?");
            res.redirect("/books");
        }
        else
        {
            if (book.postedBy.id.equals(req.user._id))
            {
                next();
            }
            else
            {
                req.flash("error", "That isn't your book!");
                res.redirect("back");
            }
        }
        });
    }
    else
    {
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if (req.isAuthenticated())
    {
        Comment.findById(req.params.comment_id, function(err, comment){
        if (err)
        {
            console.log(err);
            req.flash("error", "Comment not found. May have been removed from the database?");
            res.redirect("/books");
        }
        else
        {
            if (comment.author.id.equals(req.user._id))
            {
                next();
            }
            else
            {                
                req.flash("error", "That isn't your comment!");
                res.redirect("back");
            }
        }
        });
    }
    else
    {
        res.redirect("back");
    }
};

module.exports = middlewareObj;