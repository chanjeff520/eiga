const router = require('express').Router();
const { User, Movie } = require('../models')

router.get('/', async (req, res) => {
    res.send("HAAAAAAAAAM");
    console.log("HAAAAAAAAAM");
});

module.exports = router;