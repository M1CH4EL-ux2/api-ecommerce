const Cart = require('../../models/Cart');

const CartController = {
    async createCart(req, res) {
        const bodyData = req.body;
        const { user_id } = req.params;
         
        try {
            const data = { username: user_id, ...bodyData }

            const createCart = await Cart.create(data);
            await createCart.populate('username');

            return res.status(200).json(createCart);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getUserCarts(req, res) {
        const { user_id } = req.params;
        
        try {
            const userCarts = await Cart.find({username: user_id});
            return res.status(200).json(userCarts);

        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getCarts(req, res) {
        const { cart_id } = req.params;

        try {
            const carts = await Cart.findById(cart_id);
            return res.status(200).json(carts);
        } catch (err) {
            return res.status(400).json(err);
        }        
    }
}

module.exports = CartController;