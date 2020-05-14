const express = require('express');
const router = express.Router();
const Book = require('../models/books.js')

// GET
router.get("/", (req, res) => {
    Book.find({}).then(books => {
        res.json( books );
    })
    .catch(err => {
        console.log(err.message);
        res.json({ 'no books found, message: ': err.message });
    })
})

router.get("/title", function(req, res) {
    Book.findOne({ title: req.params.title }).lean()
    .then(book => {
        console.log(book)
        res.json({ 'title': book.title, 'author': book.author, 
                    'year-published': book.pubYear,
        });
    })
    .catch(err => {
        console.log(err);
    });
});

// ADD Book
router.post("/add/book", (req, res) => {
    const book = new Book(req.body);
    book.save(function(err, book) {
        console.log(req.body.title) // print what is added
        console.log(err)
        res.json({'addition: ': 'great success', 'book: ': book})
    });
});

// DELETE book
router.delete("/delete/:title", (req, res) => {
    Book.findOneAndRemove({title: req.params.title}, (err, Book) => {
        res.json({'removal:': 'great success', 'book: ': req.params.title})
    });
})

// UPDATE book
router.post("/update/book", (req, res) => {
    Book.findOne({_id: req.body.id}).exec().then(function(book) {
        book.title = req.body.title || book.title;
        console.log(`updated book: ${req.body.title}`)
        res.json({'update: ': 'great success', 'book updated: ': book})
        return book.save();
    }).catch(function(err) {
        console.log(err)
    });
})

module.exports = router;