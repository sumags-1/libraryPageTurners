//Dependencies
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override');
// access models
require('dotenv').config()
const db = require('./models')
// access controllers
const bookCtrl = require('./controllers/books')
const magazineCtrl = require('./controllers/magazines')
//@import 'bootstrap';


//Middleware

// set folder for static files
app.use(express.static('public'))
// sets the view engine to EJS for our app 
app.set('view engine', 'ejs')
//set method override
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


//Routes
// Index Route (GET/Read): this route will be in server.js since it affects both models
app.get('/', (req, res) => {
    // query locations from the database
    db.Book.find({}, (err, books) => {
        // query log entries from the database
        db.Magazine.find({}, (err, magazines) => {
            // render `index.ejs` after data has been queried
            res.render('index', {
                books: books,
                magazines: magazines,
                tabTitle: 'Page Turners Home'
            })
        })
    })
})

app.use('/book', bookCtrl)
app.use('/magazine', magazineCtrl)

//Listener
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})