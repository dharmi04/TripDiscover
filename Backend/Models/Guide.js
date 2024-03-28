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
const Guide = sequelize.define('Guide', {
    guide_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contact_info: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, { timestamps: false });

//   const Language = sequelize.define('Language', {
//     GuideId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         references: {
//           model: 'Guide', // This should be the name of your Guide model
//           key: 'guide_id' // This should be the primary key of the Guide table
//         }
//       },
//     language_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     }
//   }, { timestamps: false });



//   const GuideLanguage = sequelize.define('GuideLanguage', {
//     GuideId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       references: {
//         model: 'Guide', // This should be the name of your Guide model
//         key: 'guide_id' // This should be the primary key of the Guide table
//       }
//     },
//     LanguageId: {
//       type: DataTypes.INTEGER, // Assuming the language_id is of type INTEGER in the Language table
//       allowNull: false,
//       primaryKey: true,
//       references: {
//         model: 'Language', // This should be the name of your Language model
//         key: 'language_id' // This should be the primary key of the Language table
//       }
//     }
//   }, {
//     timestamps: false, // Disable timestamps
//   });
  

// module.exports = GuideLanguage;
  
  
// module.exports = Language;

// Guide.belongsToMany(Language, { through: 'GuideLanguage' });

module.exports = Guide;

