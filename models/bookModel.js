// Define the Book Schema
const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
  // 1)   {
  // // Define the 'title' field
  // // The data type of this field is a string
  // // This field is required
  // }
  // 2) {
  // // Define the 'author' field
  // // The data type of this field is a string
  // // This field is required
  // }
  // 3) {
  // // Define the 'ISBN' field
  // // The data type of this field is a string
  // // This field is required
  // // Each ISBN must be unique
  // }
  // 4) {
  //   // Define the 'publishedYear' field
  //   // The data type of this field is a number
  //   // This field is required
  // }
  // 5) Define the 'genre' field
  // The data type of this field is a string
  // 6) {
  //   // Define the 'copiesAvailable' field
  //   // The data type of this field is a number
  //  // The default value is 1
  // }
  title: {
    type : String,
    required: true,
  },
  author: {
    type : String,
    required: true
  },
  ISBN: {
    type : String,
    required: true,
    unique: true
  },
  publishedYear: {
    type : Number,
    required: true
  },
  genre: {
    type : String
  },
  copiesAvailable: {
    type : Number
  }

});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
