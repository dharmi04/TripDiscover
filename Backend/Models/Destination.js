const { Sequelize, DataTypes } = require('sequelize');

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

// Connect to SQLite in-memory database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Define the User model
const Destination = sequelize.define('Destination', {
  // Model attributes are defined here
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Auto-increment the ID
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.TEXT, // Use TEXT type for bio column
    allowNull: true
  }
}, { timestamps: false });

module.exports = Destination;

