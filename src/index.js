const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/router')

require('dotenv').config()

const server = express()


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log("conected to database"))

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(8080, () => {
    console.log("rodando na porta http://localhost:8080")
})