const express = require('express')
const router = require('express').Router();
const { User } = require('../../models')

//get all users
router.get('/', async (req, res ) => {
    console.log("get all users")
//     try {
//         const movieData = await Movie.findAll()
//         const movies = movieData.map((movies) =>
//         movies.get({ plain: true }))
//         res.render.status(200)
//         // send it to the views
//     } catch (err){
//         res.status(500).json(err)
//     console.log("where are you?")
// }
    
})

// get a single user with their associated review
router.get('/:user_id/movies/review', async (req, res ) => {
    console.log("get a single user with their associated reviews")
//     try {
//         const movieData = await Movie.findAll()
//         const movies = movieData.map((movies) =>
//         movies.get({ plain: true }))
//         res.render.status(200)
//         // send it to the views
//     } catch (err){
//         res.status(500).json(err)
//     console.log("where are you?")
// }
    
})

//create a user
router.post('/', async (req, res ) => {
    console.log("create a user")
//     try {
//         const movieData = await Movie.findAll()
//         const movies = movieData.map((movies) =>
//         movies.get({ plain: true }))
//         res.render.status(200)
//         // send it to the views
//     } catch (err){
//         res.status(500).json(err)
//     console.log("where are you?")
// }
    
})

//user login
router.post('/login', async (req, res) => {
    console.log("login")
})

//user logout
router.post('/logout', async (req, res) => {
    console.log("logout")
})



module.exports = router;