const router = require('express').Router();
const { User, Movie } = require('../models')
const path = require('path')

//----Home page----
router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/index.html'));
        console.log("This is Home Page");
    } catch (error) {
        res.status(500).json(error)
    }
});

// If the user is already logged in, redirect the request to another route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
//----Login----
router.get('/login', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/login.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});
//----Signup----
router.get('/signup', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/signup.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

//----all movies----
router.get('/movie/', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/movie.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

//----single movie----
router.get('/movie/:id', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/movie.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;