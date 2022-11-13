const router = require('express').Router();
const { User, Movie } = require('../models')
const path = require('path')

//----All movies page----
router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn == false) {
            //else redirect to login page
            res.status(200).sendFile(path.join(__dirname,'../views/login.html'));
            console.log("This is not logged in page")
        } else {
            //if logged in do this work
            res.status(200).sendFile(path.join(__dirname,'../views/dashboard.html'));
            console.log("This is Logged in Home Page");
        }
    } catch (error) {
        res.status(500).json(error)
    }
});
//condition for login

//from mini-project 
//If the user is already logged in, redirect the request to another route
// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//       res.redirect('/profile');
//       return;
//     }
  
//     res.render('login');
//   });
//  //-- 

//----Login----landing route
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

// //----all movies----
// router.get('/movie/', async (req, res) => {
//     try {
//         res.status(200).sendFile(path.join(__dirname,'../views/movie.html' ))
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

//----single movie----
router.get('/movie/:id', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../views/movie.html' ))
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;