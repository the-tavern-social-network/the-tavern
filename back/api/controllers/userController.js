const { User, Post } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');
const io = require('../socket');

module.exports = {
  async updateOne(req, res, next) {
    // Getting the id from the req.params
    const { id } = req.params;

    // Fetching the entry by its id from the req.params
    let user = await User.findByPk(id);
    let updatedUser;

    if (user) {
      // Updates the entry with the data from the req.body
      updatedUser = await user.update(req.body);
    } else {
      return next();
      // updatedUser = await model.create(req.body);
    }

    // Fetching the updated entry with its associations
    user = await User.findByPk(updatedUser.id, {
      include: 'posts',
    });

    // Getting all model associations
    const include = Object.keys(Post.associations);

    if (req.body.avatar) {
      const posts = await Post.findAll({ include });
      io.getIo().emit('save_posts', posts);
    }

    io.getIo().emit('contact_update', user);

    // Sending back the updated entry
    res.send({
      user,
      contacts: await user.getContacts(),
      tavernRequests: await user.getTavernRequests(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },
};
