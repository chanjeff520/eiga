const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;

//put into .env if needed: JAWSDB_URL='mysql://abec58g5wbufie13:gx929roht4t2edut@migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/e5yg48m9itqa2gxv'