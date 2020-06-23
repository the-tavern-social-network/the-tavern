const { User } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');

module.exports = {
  addContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    let user = await User.findByPk(+userId, { include: 'posts' });
    await user.addContact(+contactId);

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  //? To verify
  acceptContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    const updatedUser = await user.acceptContact(+contactId);

    res.send({
      user: updatedUser,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  //? To verify
  deleteContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    await user.deleteContact(+contactId);

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  blockContact: async (req, res, next) => {},
};
