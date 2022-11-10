const sequelize = require('../config/connection')
const {Movie, Review, User} = require('../models')

const movieData = require('./movies.json')

const seedDataBase = async() =>{
    await sequelize.sync({ 
        force: true
    })
    const movies = await Movie.bulkCreate(movieData)
    
}

seedDataBase()