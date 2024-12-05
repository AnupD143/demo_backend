const env  = require('dotenv').config()
const express = require('express')

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    res.send('Hello world');
})

app.get('/instagram', (req,res) => {
    res.send('<h1>______anup______<h1>');
})

app.get('/youtube', (req,res) =>{
    res.send('<a>Siddhgupta777@gmail.com</a>');
})

app.listen(process.env, () =>{
    console.log(`Server started at ${PORT}`);
})