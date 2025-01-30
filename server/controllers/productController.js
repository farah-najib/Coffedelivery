// controllers/productController.js
const Product = require('../models/Product')

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get a single product by ID
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json({ message: 'Product deleted' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
