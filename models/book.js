// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a Book schema
const bookSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        published: { type: Number },
        isbn: { type: String, required: true },
        abstract: { type: String },
        language: { type: String },
        classification: { type: String, enum: ['fiction', 'non_fiction'], required: true },
        sub_classification: { type: String, enum: ['adult', 'kids', 'teens'] },
        status: { type: String, enum: ['available', 'in_circulation', 'unknown'], default: 'available' },
        copies: { type: Number },
        image: { type: String, default: '/images/no_img.png' }
    }
)

// create a Book model using the schema
const Book = mongoose.model('Book', bookSchema)

// export the Book model
module.exports = Book