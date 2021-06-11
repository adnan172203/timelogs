const { Sequelize } = require('sequelize');

//connection database
const connectDB = async () => {
  try {
    await new Sequelize('timelogs', 'postgres', null, {
      host: 'localhost',
      dialect: 'postgres',
    });
    console.log('Database connection successful...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
