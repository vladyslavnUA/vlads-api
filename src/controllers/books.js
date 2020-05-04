const express = require('express');
const router = express.Router();
const Book = require('../models/books.js')

// GET
router.get("/", (req, res) => {
    Book.find({}).then(book => {
        res.json({ 'list of available books: ': book });
    })
})
