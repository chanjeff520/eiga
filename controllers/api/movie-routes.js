const express = require('express')
const router = require('express').Router();
const { Movie,  } = require('../../models')

//get all movies
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
// pulls a single from movie id
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
//reviews of a single movie
router.get('/:id/reviews', async (req,res) => {

});
//create a review for a single movie
router.post('/:id/reviews', )
module.exports.router