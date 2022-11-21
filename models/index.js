// dependencies
const mongoose = require("mongoose");

// connect to MongoDB via mongoose
const connectionString = "mongodb://localhost:27017/library_pageturners"
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

// access models
module.exports.Book = require("./book.js");
module.exports.Magazine = require("./magazine.js");