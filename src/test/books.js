require('dotenv').config()
const app = require('../server.js');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Book = require('../models/books');
const User = require('../models/user');
chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

// root level hooks
after((done) => {
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
})

// const book = 'The_Da_Vinci_Code'

describe('API endpoints', () => {
    //create a sample book to use
    beforeEach((done) => {
        const sampleBook = new Book({
            title: 'sampleTitle',
            author: 'sampleAuthor',
            _id: book,
            pubYear: 'yearPub',
            rating: 'starRating',
            pageCount: 'totPageCount'
        })
        sampleBook.save()
        .then(() => {
            done()
        }).catch(err => {
            console.log(err);
        });
    })

    //delete sample book
    afterEach((done) => {
        sampleBook.remove({title: ['sampleTitle'] })
        .then(() => {
            done()
        })
    })

    it('should load all books', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.title).to.be.equal('sampleTitle')
            expect(res.body.author).to.be.equal('sampleAuthor')
        }).catch(err => {
            console.log(err);
        });
    })
    // add update delete
})