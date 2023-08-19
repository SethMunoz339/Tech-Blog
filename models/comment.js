const { Sequelize, sequelize } = require('.models/index');


const Comment = sequelize.define('Comment', {
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



module.exports = Comment;