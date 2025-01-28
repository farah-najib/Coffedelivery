const getProducts = (req, res) => {
    res.status(200).json({ message: 'Get products' })
}

const setProduct = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({ message: 'Set product' })
}

const updateProduct = (req, res) => {
    res.status(200).json({ message: `Update product ${req.params.id}` })
}

const deleteProduct = (req, res) => {
    res.status(200).json({ message: `Delete product ${req.params.id}` })
}

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}
