var mongoose = require("mongoose");
var Book = require("./models/book");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam ac mi tempor varius et eu quam. Aliquam condimentum eget nulla et tincidunt. Suspendisse venenatis arcu metus, quis euismod dolor facilisis nec. Fusce iaculis erat augue, sit amet eleifend enim pulvinar sit amet. Mauris rutrum quam at tellus egestas, ut gravida tortor egestas. Nunc vehicula nunc eget dapibus viverra. Ut eget scelerisque arcu. Suspendisse interdum diam at pharetra interdum. Duis condimentum efficitur imperdiet. Ut in erat sed metus accumsan feugiat. Mauris quis est mollis, ullamcorper ligula ac, congue eros. Maecenas volutpat metus nisl, et interdum massa pretium ut. Nunc dictum ut nisl nec ullamcorper. Suspendisse elit mauris, malesuada elementum ultrices id, faucibus sodales massa. Curabitur aliquam eleifend arcu eu vulputate. Donec id justo tortor."
    },
    {
        name: "Salmon Creek",
        image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam ac mi tempor varius et eu quam. Aliquam condimentum eget nulla et tincidunt. Suspendisse venenatis arcu metus, quis euismod dolor facilisis nec. Fusce iaculis erat augue, sit amet eleifend enim pulvinar sit amet. Mauris rutrum quam at tellus egestas, ut gravida tortor egestas. Nunc vehicula nunc eget dapibus viverra. Ut eget scelerisque arcu. Suspendisse interdum diam at pharetra interdum. Duis condimentum efficitur imperdiet. Ut in erat sed metus accumsan feugiat. Mauris quis est mollis, ullamcorper ligula ac, congue eros. Maecenas volutpat metus nisl, et interdum massa pretium ut. Nunc dictum ut nisl nec ullamcorper. Suspendisse elit mauris, malesuada elementum ultrices id, faucibus sodales massa. Curabitur aliquam eleifend arcu eu vulputate. Donec id justo tortor."
    },
    {
        name: "Granite Hill",
        image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam ac mi tempor varius et eu quam. Aliquam condimentum eget nulla et tincidunt. Suspendisse venenatis arcu metus, quis euismod dolor facilisis nec. Fusce iaculis erat augue, sit amet eleifend enim pulvinar sit amet. Mauris rutrum quam at tellus egestas, ut gravida tortor egestas. Nunc vehicula nunc eget dapibus viverra. Ut eget scelerisque arcu. Suspendisse interdum diam at pharetra interdum. Duis condimentum efficitur imperdiet. Ut in erat sed metus accumsan feugiat. Mauris quis est mollis, ullamcorper ligula ac, congue eros. Maecenas volutpat metus nisl, et interdum massa pretium ut. Nunc dictum ut nisl nec ullamcorper. Suspendisse elit mauris, malesuada elementum ultrices id, faucibus sodales massa. Curabitur aliquam eleifend arcu eu vulputate. Donec id justo tortor."
    }
];

function seedDB() 
{
    // Remove all books
    Book.remove({}, function(err){
    //     if (err)
    //     {
    //         console.log(err);
    //     }
    //      else
    //     {
    //         console.log("Books removed from database...");
    //         // Add some books
    //         data.forEach(function(book) {
    //             book.create(book, function(err, book){
    //                 if (err)
    //                 {
    //                     console.log(err);
    //                 }
    //                 else
    //                 {
    //                     console.log("Added a book...");
    //                     Comment.create(
    //                         {
    //                             text: "Comment sample",
    //                             author: "Author sample"
    //                         }, function(err, comment){
    //                             if (err)
    //                             {
    //                                 console.log(err);
    //                             }
    //                             else
    //                             {
    //                                 book.comments.push(comment);
    //                                 book.save();
    //                                 console.log("Comment added...");
    //                             }
    //                         }
    //                     )
    //                 }
    //             });
    //         });
    //     }
    });
};

module.exports = seedDB;