const { User } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');
const io = require('../socket');

module.exports = {
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

    io.getIo().emit('add_contact', { contactInfos });

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  acceptContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    await user.acceptContact(+contactId);

    const contact = await User.findByPk(+contactId);
    const contactInfos = {
      user: contact,
      contacts: await contact.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
    };

    io.getIo().emit('accept_contact', { contactInfos });

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  deleteContact: async (req, res, next) => {
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    await user.deleteContact(+contactId);

    const contact = await User.findByPk(+contactId);
    const contactInfos = {
      user: contact,
      contacts: await contact.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
    };

    io.getIo().emit('delete_contact', { contactInfos });

    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
    });
  },

  blockContact: async (req, res, next) => {},
};
