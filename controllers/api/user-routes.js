const e = require('express');
const express = require('express')
const router = require('express').Router();
const { User } = require('../../models')

//get all users
// router.get('/', async (req, res ) => {
//     res.send("get all users");
//     console.log("get all users")

// })

// get a single user with their associated review
// router.get('/:user_id/movies/review', async (req, res ) => {
//     res.send("get a single user with their associated reviews");
//     console.log("get a single user with their associated reviews")
// })

//create a user
router.post('/', async (req, res ) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
        req.session.loggedIn = true;
        
          res.status(200).json(dbUserData)
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//user login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password. Please try again! '});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    // res.send("login");
    // console.log("login")
});

//user logout
router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            req.status(204).end();
        });
        } else {
            res.status(404).end();
        }
    });
    // res.send("logout");
    // console.log("logout")




module.exports = router;