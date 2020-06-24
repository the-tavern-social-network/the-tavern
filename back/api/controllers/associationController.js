const { User } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');
const io = require('../socket');

module.exports = {
  //* ok
  addContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    let user = await User.findByPk(+userId, { include: 'posts' });
    await user.addContact(+contactId);

    const contact = await User.findByPk(+contactId);
    const contactInfos = {
      user: contact,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
    };

    io.getIo().emit('add_contact', { user, contactInfos });

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

  //* ok
  deleteContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    await user.deleteContact(+contactId);

    io.getIo().emit('delete_contact', { userId, contactId });

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  blockContact: async (req, res, next) => {},
};
