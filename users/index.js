"use strict"

const express = require('express')

const app = express()
app.use(express.json())

app.route('/').get(function(req, res) {
    res.status(200).send('Ini adalah bagian users dari microservice')
})

app.listen(5001, () => {
    console.log('Users is running on port 5001')
})