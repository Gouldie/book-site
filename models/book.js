var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   author: String,
   postedBy: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Book", bookSchema);

// Book.create(
//     {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg", description: "Description for Salmon Creek."},
//     {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg", description: "Description for Granite Hill."},
//     {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg", description: "Description for Mountain Goat's Rest"},
//     function(err, books){
//         if (err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log("success");
//             console.log(books);
//         }
//     }
// );