const { Sequelize, sequelize } = require('.models/index');


const Blog = sequelize.define('Blog', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});



module.exports = Blog;