const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pubYear: { type: String, required: true },
    rating: { type: Number, required: true },
    pageCount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date},
});

BookSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;
  
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
});

Book = mongoose.model('Book', BookSchema);
module.exports = Book;