// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/location`
---------------------------------------------------------------------------------------
*/

// New Route (get) : form the librarian will use add a new book
router.get('/new', (req, res) => {
    res.render('newBook', {
        tabTitle: "New Book"
    })
})

// Create Route (post): adds the book and redirects to home page
router.post('/', (req, res) => {
    db.Book.create(req.body, (err, book) => {
        res.redirect('/')
    })
})

//delete route
router.delete('/:id', (req, res) => {
    db.Book.findByIdAndRemove(req.params.id, (err, book) => {
        res.redirect('/')
    })
})

// edit route
router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
        res.render("editBook", {
            book: book
        })
    })
})

router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
        res.redirect('/book/' + book._id)
    })
})

router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
        res.render("editBook", {
            book: book
        })
    })
})



// Show book route (GET/Read): This route will show an individual location document using the URL parameter (which will always be the location document's ID)
router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
        res.render("showBook", {
            book: book,
            tabTitle: "Book: " + book.title
        })
    })
})

// export these routes so that they are acessible in `server.js`
module.exports = router