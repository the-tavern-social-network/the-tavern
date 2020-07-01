// const Contact = require('./contact');
const User = require('./user');
const Post = require('./post');
const TavernRequest = require('./tavernRequest');

const Contact = require('./contact');

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
  through: Contact,
  foreignKey: 'user_id',
  as: 'user',
});

User.belongsToMany(User, {
  through: Contact,
  foreignKey: 'contact_id',
  as: 'contacts',
});

// TAVERN_REQUEST 11 <-> 0N USER
TavernRequest.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: 'participant_id',
  as: 'participant',
});

User.hasMany(TavernRequest, {
  foreignKey: 'participant_id',
  as: 'tavernRequests',
});

module.exports = {
  User,
  Post,
  TavernRequest,
};
