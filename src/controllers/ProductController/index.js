const Product = require('../../models/Product')

const ProductController = {
    async createProduct(req, res) {
        const bodyData = req.body;
        const { user_id } = req.params
        
        try {
            const data = {username: user_id, ...bodyData}

            const newProduct = await Product.create(data);
            await newProduct.populate('username')

            return res.status(200).json(newProduct);
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    },
    async getUserProducts(req, res) {

        const { user_id } = req.params

        try {
            const productOfAnUser = await Product.find({ username: user_id })
            return res.status(200).json(productOfAnUser)
            
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async updateProducts(req, res) {

        const bodyData = req.body;
        const { product_id } = req.params;

        try {
            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true });
            
            return res.status(200).json(updateProduct);
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async deleteProduct(req, res) {
        const { product_id } = req.params;

        try {
            const deleteProduct = await Product.findByIdAndDelete(product_id)
            
            return res.status(200).json(deleteProduct);
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getProducts(req, res) {
        try {
            
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getProductsById(req, res) {
        try {
            
        } catch (err) {
            return res.status(400).json(err)
        }
    },
}

module.exports = ProductController
