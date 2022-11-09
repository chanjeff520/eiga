const router = require('express').Router();
const movieRoutes = require('./movie-routes');
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/movie', movieRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;