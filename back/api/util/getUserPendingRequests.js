const { User } = require('../models');

/**
 *
 * @param {User} user is an instance of the User class
 * this function is used to get the user's sent and received pending requests
 * @returns an object with this shape : {sent: [], received: []}
 *
 * sent and received properties are arrays of objects.
 *
 *
 * const pendingRequests = {
 *  sent: [
 *    {
 *      id: 14,
 *      email: 'tavernier@tavern.fr',
 *      password: '$2b$12$7NCa/KulumnVvFkKdPnvoO3zR72sz7JTKqhHpxdSwM3nWCTf2GiGS',
 *      username: 'Tavernier',
 *      title: 'El Patron',
 *      avatar: '/static/media/human_male_bg.ae49f34d.png',
 *      birthdate: '1957-08-25',
 *      description: "Qui c'est le patron?",
 *      createdAt: '2020-07-01T11:18:57.001Z',
 *      updatedAt: '2020-07-07T19:19:27.682Z',
 *    },
 *    {
 *      id: 27,
 *      email: 'lemegasorcier@gmail.com',
 *      password: '$2b$12$7NCa/KulumnVvFkKdPnvoO3zR72sz7JTKqhHpxdSwM3nWCTf25f78',
 *      username: 'SorcierBG',
 *      title: 'Mage noir',
 *      avatar: '/static/media/darkelf_male_bg.te58l4d.png',
 *      birthdate: '1987-03-12',
 *      description: null,
 *      createdAt: '2020-06-01T10:35:35.001Z',
 *      updatedAt: '2020-06-02T09:01:54.682Z',
 *    },
 *  ],
 *
 *  received: [
 *    {
 *      id: 57,
 *      email: 'aragorndu47@gmail.com',
 *      password: '$2b$12$7NCa/Kulu4545fTjh254585nvoO3zR75f45dUe$WCTf2jTS',
 *      username: 'Aragorn',
 *      title: 'Coincé dans un donjon',
 *      avatar: '/static/media/human_male_bg.ae49f34d.png',
 *      birthdate: '1990-09-08',
 *      description: null,
 *      createdAt: '2020-06-14T14:47:27.001Z',
 *      updatedAt: '2020-07-01T21:27:13.682Z',
 *    },
 *  ],
 * };
 */

const getUserPendingRequests = async user => {
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
