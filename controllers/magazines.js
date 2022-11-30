// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()


// New Route (get) : form the librarian will use add a new magazine
router.get('/new', (req, res) => {
    res.render('newMagazine', {
        tabTitle: "New Magazine"
    })
})

// Create Route (post): adds the magazine and redirects to home page
router.post('/', (req, res) => {
    db.Magazine.create(req.body, (err, magazine) => {
        res.redirect('/')
    })
})

//delete route
router.delete('/:id', (req, res) => {
    db.Magazine.findByIdAndRemove(req.params.id, (err, magazine) => {
        res.redirect('/')
    })
})

// edit route
router.put('/:id', (req, res) => {
    db.Magazine.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, magazine) => {
        res.redirect('/magazine/'+ magazine._id)
    })
})

router.get('/:id/edit', (req, res) => {
    db.Magazine.findById(req.params.id, (err, magazine) => {
        res.render("editMagazine", {
            magazine: magazine
        })
    })
})



// Show book route (GET/Read)
router.get('/:id', (req, res) => {
    db.Magazine.findById(req.params.id, (err, magazine) => {
        res.render("showMagazine", {
            magazine: magazine,
            tabTitle: "Magazine: " + magazine.title
        })
    })
})

// export these routes so that they are acessible in `server.js`
module.exports = router