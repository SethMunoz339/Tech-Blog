const Sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and initialize models 
db.User = require('./user')(sequelize, Sequelize);
db.Blog = require('./blog-post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
//associations between models 
User.hasMany(Blog);
Blog.hasMany(Comment);
Comment.belongsTo(User);
module.exports = db;