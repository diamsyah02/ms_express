"use strict"

const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()
app.use(cors())
app.use(express.json())

app.route('/').get(function(req, res) {
    res.status(200).send('Ini gateway microservice')
})
app.use('/users', proxy('http://localhost:5001'))
app.use('/products', proxy('http://localhost:5002'))

app.listen(5000, () => {
    console.log('Gateway is running on port 5000')
})