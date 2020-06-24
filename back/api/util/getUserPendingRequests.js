const { User } = require('../models');

const getUserPendingRequests = async (user) => {
  const requests = await user.getPendingRequests();

  const pendingRequests = { sent: [], received: [] };
  for (const request of Object.keys(requests)) {
    for (const req of requests[request]) {
      if (request === 'sent') {
        pendingRequests.sent.push(await User.findByPk(req.contact_id));
      } else if (request === 'received') {
        pendingRequests.received.push(await User.findByPk(req.user_id));
      }
    }
  }
  return pendingRequests;
};

module.exports = getUserPendingRequests;
