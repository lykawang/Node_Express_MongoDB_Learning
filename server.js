const express = require('express');
const mongoose = require('mongoose');
const app = express();

// routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello, blog! My name is Pikachu')
})

mongoose
.connect('mongodb+srv://admin:0306@cluster0.ukc5yxi.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000 now`)
    });
}).catch((error) => {
    console.log(error)
})