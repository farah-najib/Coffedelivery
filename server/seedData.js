// seedData.js
const mongoose = require('mongoose')
const Product = require('./models/Product')
const connectDB = require('./db/db')
const data = require('./data.json') // This should be your JSON data

// Connect to MongoDB
connectDB();

        Product.insertMany(data.products)
            .then(() => {
                console.log('Seed data inserted')
                mongoose.connection.close()
            })
            .catch((err) => {
                console.error('Error inserting seed data:', err)
                mongoose.connection.close()
            })
