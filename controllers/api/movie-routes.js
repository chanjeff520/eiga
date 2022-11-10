const { response } = require('express');
const express = require('express')
const router = require('express').Router();
const { Movie } = require('../../models')

//get all movies for movie page
router.get('/', async (req, res ) => {
    try {
        const dbMovieData = await Movie.findAll(
            {attributes: ['title', 'release_date', 'image']}
        )
        const movies = dbMovieData.map((movies) =>
        movies.get({plain: true}));
        res.json(movies)
    }
    catch(err){
        res.status(500).json(err)
    }
    console.log('all movies');
});
// pulls a single from movie id
router.get('/:id', async (req, res ) => {
    console.log("a single movie");
});
//reviews of a single movie
router.get('/:id/reviews', async (req,res) => {
    console.log("a single movie with its associated reviews");
});
//create a review for a single movie
router.post('/:id/reviews', async (req,res) => {
    console.log("create a review for a certain movie");
});
module.exports = router;