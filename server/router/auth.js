const { log } = require('console');
const express = require('express');
const router = express.Router();
const User = require('../models/auth')
const generate = require('../utils/util')


router.post('/login', (req,res) => {

    res.status(200).send({status:200})
})

router.post('/register', async (req, res) => {
    try {
        const{email,password, name, surName} = req.body
        res.setHeader('Acces-Control-Allow-Origin','*')
        res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,DELETE')

        const token = generate(email,password)
        const user = new User({
            email,
            password, 
            name, 
            surName, 
            accesToken:token.accessToken,
            refreshToken:token.refreshToken
        })
        
        await user.save()
        res.status(201).send(token)

    } catch (e) {
        console.log(e)
    }
})

module.exports = router;