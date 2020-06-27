const { Sequelize, Model, Op } = require('sequelize');
const sequelize = require('../db/database');
const Contact = require('../models/contact');
const TavernRequest = require('../models/tavernRequest');
const { request } = require('express');

class User extends Model {
  getContacts = async () => {
    try {
      const requests = await Contact.findAll({
        where: {
          [Op.and]: [{ user_id: +this.id }, { status: 'accepted' }],
        },
      });

      const contactsArray = [];
      for (const request of requests) {
        contactsArray.push(await User.findByPk(request.contact_id));
      }

      return contactsArray;
    } catch (err) {
      throw err;
    }
  };

  getPendingRequests = async () => {
    try {
      const received = await Contact.findAll({
        where: {
          [Op.and]: [{ contact_id: +this.id }, { status: 'pending' }, { requester: true }],
        },
      });

      const sent = await Contact.findAll({
        where: {
          [Op.and]: [{ user_id: +this.id }, { status: 'pending' }, { requester: true }],
        },
      });

      return { received, sent };
    } catch (err) {
      throw err;
    }
  };

  addContact = async (contactId) => {
    try {
      const alreadyExists = await Contact.findOne({
        where: {
          [Op.or]: [
            {
              [Op.and]: [{ user_id: +this.id }, { contact_id: +contactId }],
            },
            {
              [Op.and]: [{ contact_id: +this.id }, { user_id: +contactId }],
            },
          ],
        },
      });

      if (!alreadyExists) {
        await Contact.create({
          user_id: +this.id,
          contact_id: +contactId,
          requester: true,
        });

        await Contact.create({
          user_id: +contactId,
          contact_id: +this.id,
          requester: false,
        });
        return true;
      }
      return false;
    } catch (err) {
      throw err;
    }
  };

  acceptContact = async (contactId) => {
    try {
      const senderRequest = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: +this.id }, { contact_id: +contactId }],
        },
      });

      const receiverRequest = await Contact.findOne({
        where: {
          [Op.and]: [{ contact_id: +this.id }, { user_id: +contactId }],
        },
      });

      const sender = await senderRequest.update({
        status: 'accepted',
      });

      await receiverRequest.update({
        status: 'accepted',
      });

      return true;
    } catch (err) {
      throw err;
    }
  };

  deleteContact = async (contactId) => {
    try {
      const sender = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: +this.id }, { contact_id: contactId }],
        },
      });

      const receiver = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: contactId }, { contact_id: +this.id }],
        },
      });

      await sender.destroy();
      await receiver.destroy();

      return true;
    } catch (err) {
      throw err;
    }
  };

  getTavernRequests = async () => {
    try {
      const id = +this.id;
      const tavernRequests = await TavernRequest.findAll({ where: { participant_id: id } });

      const requestsArray = [];
      for (const tavernRequest of tavernRequests) {
        const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);
        requestsArray.push({
          gamemaster,
          tavernId: tavernRequest.tavern_id,
        });
      }

      return requestsArray;
    } catch (err) {
      console.trace(err);
    }
  };
  // createTavernRequest = async (participantId, tavernId) => {
  //   try {
  //     const alreadyExists = await TavernRequest.findOne({
  //       where: {
  //         [Op.or]: [
  //           {
  //             [Op.and]: [{ user_id: +this.id }, { participant_id: +participantId }],
  //           },
  //           {
  //             [Op.and]: [{ participant_id: +this.id }, { user_id: +participantId }],
  //           },
  //         ],
  //       },
  //     });

  //     if (!alreadyExists) {
  //       await TavernRequest.create({
  //         user_id: +this.id,
  //         participant_id: +participantId,
  //         tavern_id: +tavernId,
  //         // requester: true,
  //       });

  //       await TavernRequest.create({
  //         user_id: +participantId,
  //         participant_id: +this.id,
  //         tavern_id: +tavernId,
  //         // requester: false,
  //       });
  //       return true;
  //     }
  //     return false;
  //   } catch (err) {
  //     throw err;
  //   }
  // };
  // deleteTavernRequest = async (participantId) => {};
}

User.init(
  {
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatar: Sequelize.TEXT,
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    description: Sequelize.TEXT,
  },
  {
    sequelize,
    underscored: true,
    tableName: 'users',
  },
);

module.exports = User;
