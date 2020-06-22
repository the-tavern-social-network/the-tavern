const { User } = require('../models');

module.exports = {
  addContact: async (req, res, next) => {
    const { contactOneId, contactTwoId } = req.params;

    let contactOne = await User.findByPk(+contactOneId);
    await contactOne.addContact(+contactTwoId);

    pendingRequests = [];
    for (const request of await contactOne.getPendingRequests()) {
      pendingRequests.push(await User.findByPk(request.contact_id));
    }

    res.send({ user: contactOne, userFriends: await contactOne.getContacts(), pendingRequests });
  },

  acceptContact: async (req, res, next) => {
    const { contactOneId, contactTwoId } = req.params;

    const contactOne = await User.findByPk(+contactOneId);
    const updatedContactOne = await contactOne.acceptContact(+contactTwoId);

    res.send({ user: updatedContactOne, userFriends: await contactOne.getContacts() });
  },
};
