const express = require('express');
const mongoose = require ('mongoose')
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const app = express();
const helloRouter = require('./router/auth')

app.use(cors()) 
app.use(bodyParser.json())
app.use('/auth', helloRouter)

const mongoURL = "mongodb+srv://zhanzakovm:Madhat020797@cluster0.l4j9qxe.mongodb.net/social-network-db"



mongoose.connect(mongoURL).then(() => {
    console.log('connected')
})

app.listen(8000, 'localhost', () => {
    console.log('Server started on 8000')
})

