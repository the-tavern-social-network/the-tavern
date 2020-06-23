const { User } = require('../models');

module.exports = {
  addContact: async (req, res, next) => {
    const { contactOneId, contactTwoId } = req.params;

    let contactOne = await User.findByPk(+contactOneId);
    await contactOne.addContact(+contactTwoId);

    const requests = await contactOne.getPendingRequests();

    const pendingRequests = { sent: [], received: [] };
    for (const request of Object.keys(requests)) {
      for (const req of requests[request]) {
        if (request === 'sent') {
          pendingRequests.sent.push(await User.findByPk(req.user_id, { include: 'posts' }));
        } else if (request === 'received') {
          pendingRequests.received.push(await User.findByPk(req.user_id, { include: 'posts' }));
        }
      }
    }

    console.log(pendingRequests);

    // res.send({ user: contactOne, userFriends: await contactOne.getContacts(), pendingRequests });
  },

  acceptContact: async (req, res, next) => {
    const { contactOneId, contactTwoId } = req.params;

    const contactOne = await User.findByPk(+contactOneId);
    const updatedContactOne = await contactOne.acceptContact(+contactTwoId);

    res.send({ user: updatedContactOne, userFriends: await contactOne.getContacts() });
  },
};
