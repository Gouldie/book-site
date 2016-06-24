var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
   title: String,
   text: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Comment", commentSchema);