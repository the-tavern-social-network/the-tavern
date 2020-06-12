const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/database');
class Post extends Model {
  //
}

Post.init(
  {
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: Sequelize.TEXT,
    color: {
      type: Sequelize.TEXT,
      defaultValue: '#fff',
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'posts',
  },
);

module.exports = Post;
