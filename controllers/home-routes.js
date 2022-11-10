const router = require('express').Router();
const { User, Movie } = require('../models')
const path = require('path')

router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/index.html'));
        console.log("This will show in Terminal");
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/login', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/login.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/signup.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/movie/:id', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/movie.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;