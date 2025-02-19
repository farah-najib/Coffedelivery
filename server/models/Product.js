// models/Product.js
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    price: {
        currency: { type: String, required: true },
        amount: { type: Number, required: true }
    },
    image: { type: String, required: true },
    popular: { type: Boolean, default: false }

})

module.exports = mongoose.model('Product', productSchema)
