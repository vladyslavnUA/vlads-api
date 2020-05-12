const express = require('express');
const router = express.Router();
const Book = require('../models/books.js')

// GET
router.get("/", (req, res) => {
    Book.find({}).then(books => {
        res.json({ 'list of available books: ': books });
    })
    .catch(err => {
        console.log(err.message);
        res.json({ 'no books found, message: ': err.message });
    })
})

router.get("/:book", function(req, res) {
    Book.find({ book: req.params.book })
    .then(book => {
        res.json({ 'title': book.title, 'author': book.author, 
                    'year-published': book.pubYear,
        })
    })
    .catch(err => {
        console.log(err);
    });
});