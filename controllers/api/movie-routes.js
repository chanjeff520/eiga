const express = require('express')
const router = require('express').Router();
const { Movie,  } = require('../../models')

router.get('/', async (req, res ) => {
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
// pulls from movie id a single movie
router.get('/:id', async (req, res ) => {
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

module.exports.router