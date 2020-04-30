require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

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

const book = 'The_Da_Vinci_Code'

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
        })
    })

    //delete sample book
    afterEach((done) => {
        book.deletemany({title: ['sampleTitle'] })
        .then(() => {
            done()
        })
    })

    it('should load all books', (done) => {
        chai.request(app)
        .get('/bookdb/all')
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.title).to.be.equal('sampleTitle')
            expect(res.body.author).to.be.equal('sampleAuthor')
        })
    })
    // add update delete
})