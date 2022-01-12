const { Router } = require('express')
const CartController = require('../controllers/CartController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')

const { authentication } = require('../middlewares')

const routes = Router()

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUser)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', authentication, ProductController.createProduct)
routes.get('/:user_id/products/', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', authentication, ProductController.updateProducts)
routes.delete('/products/:user_id/:product_id', authentication, ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductsById)

routes.post('/cart/:user_id', authentication, CartController.createCart)
routes.get('/cart/:user_id', authentication, CartController.getUserCarts)

routes.get('/cart/:user_id/:cart_id', authentication, CartController.getCarts)

module.exports = routes