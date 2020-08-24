const { User } = require('../models');
const getUserPendingRequests = require('../util/getUserPendingRequests');
const io = require('../socket');

module.exports = {
  addContact: async (req, res, next) => {
    // Gets the userId and the contactId from the req.params
    const { userId, contactId } = req.params;

    // Gets the user by its id
    let user = await User.findByPk(+userId, { include: 'posts' });
    // Adds a contact to the user by the contactId
    await user.addContact(+contactId);

    // Gets the added contact
    const contact = await User.findByPk(+contactId);
    // Gets the contacts, the pendingRequests and the tavernRequests for the contact
    const contactInfos = {
      user: contact,
      contacts: await contact.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
      tavernRequests: await contact.getTavernRequests(),
    };

    // Sends it via sockets for a real-time experience
    io.getIo().emit('add_contact', { contactInfos });

    // Sends back an object with the user and its contacts, pendingRequests and tavernRequests
    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
      tavernRequests: await user.getTavernRequests(),
    });
  },

  acceptContact: async (req, res, next) => {
    // Gets the userId and the contactId from the req.params
    const { userId, contactId } = req.params;

    // Gets the user by its id
    const user = await User.findByPk(+userId, { include: 'posts' });
    // Accepts a contact by the contactId
    await user.acceptContact(+contactId);

    // Gets the accepted contact
    const contact = await User.findByPk(+contactId);
    // Gets the contacts, the pendingRequests and the tavernRequests for the contact
    const contactInfos = {
      user: contact,
      contacts: await contact.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
      tavernRequests: await contact.getTavernRequests(),
    };

    // Sends it via sockets for a real-time experience
    io.getIo().emit('accept_contact', { contactInfos });

    // Sends back an object with the user and its contacts, pendingRequests and tavernRequests
    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
      tavernRequests: await user.getTavernRequests(),
    });
  },

  deleteContact: async (req, res, next) => {
    // Gets the userId and the contactId from the req.params
    const { userId, contactId } = req.params;

    const user = await User.findByPk(+userId, { include: 'posts' });
    // Deletes a contact by the contactId
    await user.deleteContact(+contactId);

    const contact = await User.findByPk(+contactId);
    // Gets the contacts, the pendingRequests and the tavernRequests for the contact
    const contactInfos = {
      user: contact,
      contacts: await contact.getContacts(),
      pendingRequests: await getUserPendingRequests(contact),
      tavernRequests: await contact.getTavernRequests(),
    };

    // Sends it via sockets for a real-time experience
    io.getIo().emit('delete_contact', { contactInfos });

    // Sends back an object with the user and its contacts, pendingRequests and tavernRequests
    res.send({
      user,
      contacts: await user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
      tavernRequests: await user.getTavernRequests(),
    });
  },

  //? To implement in the future
  blockContact: async (req, res, next) => {},
};
