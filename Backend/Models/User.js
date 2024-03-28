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
const User = sequelize.define('User', {
  // Model attributes are defined here
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Auto-increment the ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Ensure email is unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT, // Use TEXT type for bio column
    allowNull: true
  }
}, { timestamps: false });

module.exports = User;

