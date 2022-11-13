const e = require('express');
const express = require('express')
const router = require('express').Router();
const { User } = require('../../models')

//----get all users----
//----api/user----
router.get('/', async (req, res ) => {
    try {
        const dbUserData = await User.findAll()
        res.status(200).json(dbUserData)
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    } 
});

// get user by specific id
router.get('/:id', async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.params.id)
        res.status(200).json(dbUserData)
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//create a user
//----api/user----
router.post('/register', async (req, res ) => {
    console.log(req.body)
    if (req.body.password !== req.body.confirmPassword) {
        res.status(400).send("password not right")
    }
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            console.log(req.session)
            res.status(200).json(dbUserData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//user login
//----api/user----
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
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//user logout
//----api/user----
router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
        } else {
            res.status(404).end();
        }
    });






module.exports = router;