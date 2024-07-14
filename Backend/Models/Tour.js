const { Sequelize, DataTypes } = require('sequelize');
const Destination = require('./Destination');
const Guide = require('./Guide');

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
  } = process.env;

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

const Tour = sequelize.define('Tour', {
  tour_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  destination_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Destinations',
      key: 'destination_id'
    }
  },
  tour_name: {
    type: DataTypes.TEXT, // Assuming the tour name is a string
    allowNull: false
  },
  
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imagePath: {
    type: DataTypes.STRING ,// Adjust this according to your file path configuration
    allowNull: true
  }
},{ timestamps: false });


Tour.belongsTo(Destination, { foreignKey: 'destination_id' });
// Tour.belongsTo(Guide, { foreignKey: 'guide_id' });

module.exports = Tour;
