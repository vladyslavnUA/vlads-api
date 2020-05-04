const express = require('express');
const bookRoutes = require('./books.js');
const authRoutes = require('./auth.js');

const router = express.Router();

router.use('/books', bookRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
    res.json({})
})