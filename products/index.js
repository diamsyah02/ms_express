"use strict"

const express = require('express')

const app = express()
app.use(express.json())

app.route('/').get(function(req, res) {
    res.status(200).send('Ini adalah bagian products dari microservice')
})

app.listen(5002, () => {
    console.log('Products is running on port 5002')
})