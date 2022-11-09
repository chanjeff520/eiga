const router = require('express').Router();
const movieRoutes = require('./movie-routes');
const userRoutes = require('./user-routes');


router.use('/movie', movieRoutes);
router.use('/user', userRoutes);


module.exports = router;