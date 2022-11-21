// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a magazine schema
const magazineSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String },
        publication_information: { type: String },
        language: { type: String },
        classification: { type: String, enum: ['weekly', 'monthly', 'annual'] },
        general_note: { type: String },
        status: { type: String, enum: ['available', 'in_circulation', 'unknown'], default: 'available' },
        copies: { type: Number, default: 1 },
        image: { type: String, default: 'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg' }
    }
)

// create a magazine model using the magazineSchema
const Magazine = mongoose.model('Magazine', magazineSchema)

// export the model
module.exports = Magazine