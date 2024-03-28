// Import Sequelize and DataTypes
const { Sequelize, DataTypes } = require('sequelize');
const Destination = require('./Destination');
const Guide = require('./Guide');
const User = require('./User');
const Tour = require('./Tour');
// Define the connection parameters
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

// Create a Sequelize instance to connect to the database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Define the Booking model
// Define the Booking model
const Booking = sequelize.define('Booking', {
    booking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tours',
        key: 'tour_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    traveler_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    traveler_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traveler_gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    traveler_aadhar_number: {
      type: DataTypes.STRING,
      allowNull: true
    },

    // Add more columns for other traveler details as needed
  }, {
    timestamps: false // Disable timestamps (createdAt, updatedAt)
  });

Booking.belongsTo(Tour, { foreignKey: 'tour_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });
  
// Export the Booking model
module.exports = Booking;




