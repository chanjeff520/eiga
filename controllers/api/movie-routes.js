const express = require('express')
const router = require('express').Router();
const { Movie } = require('../../models')

//get all movies
router.get('/', async (req, res ) => {
    console.log('all movies');
});
// pulls a single from movie id
router.get('/:id', async (req, res ) => {
    console.log("a signle movie");
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