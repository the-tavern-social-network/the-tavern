const { User } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');

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

    // Sending back the updated entry
    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },
};
