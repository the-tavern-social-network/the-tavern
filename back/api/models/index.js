// const Contact = require('./contact');
const User = require('./user');
const Post = require('./post');

// POST 11 <-> 0N USER
Post.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
  as: 'author',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  as: 'posts',
});

// USER 0N <-> 0N USER
User.belongsToMany(User, {
  through: 'contacts',
  foreignKey: 'contact_one',
  otherKey: 'contact_two',
  as: 'self',
});

User.belongsToMany(User, {
  through: 'contacts',
  foreignKey: 'contact_two',
  otherKey: 'contact_one',
  as: 'friends',
});

module.exports = {
  User,
  Post,
};
