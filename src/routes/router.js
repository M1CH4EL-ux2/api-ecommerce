const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'Olá mundo'
    })
})

module.exports = routes