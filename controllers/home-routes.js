const router = require('express').Router();
const { User, Movie } = require('../models')
const path = require('path')

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname,'../views/index.html'));
    console.log("This will show in Terminal");
});

module.exports = router;