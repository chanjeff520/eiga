const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');


User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  OnDelete: 'CASCADE'
});

Review.belongsTo(Movie, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Movie.hasMany(Review, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Movie, Review };