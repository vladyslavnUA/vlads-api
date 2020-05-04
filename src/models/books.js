const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Book({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pubYear: { type: String, required: true },
    rating: { type: Number, required: true },
    pageCount: { type: Number, required: true },
});

Book = mongoose.model('Book', CourseSchema);
module.exports = Book;