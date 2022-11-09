const router = require('express').Router();
const { User, Movie } = require('../models')

router.get('/', async (req, res) => {
    console.log(res);
});

module.exports = router;