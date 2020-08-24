const { Sequelize, Model, Op } = require('sequelize');
const sequelize = require('../db/database');
const Contact = require('../models/contact');
const TavernRequest = require('../models/tavernRequest');
const { request } = require('express');

class User extends Model {
  /**
   * @returns an array of contacts with the 'accepted' status for the current user
   */
  getContacts = async () => {
    try {
      // Gets all the contacts with the 'accepted' status
      const requests = await Contact.findAll({
        where: {
          [Op.and]: [{ user_id: +this.id }, { status: 'accepted' }],
        },
      });

      // Creates an empty array
      const contactsArray = [];
      for (const request of requests) {
        // Gets the user with the id of the contact_id of the request and pushes it to the array of contacts
        contactsArray.push(await User.findByPk(request.contact_id, { include: 'tavernRequests' }));
      }

      return contactsArray;
    } catch (err) {
      throw err;
    }
  };

  /**
   * @returns an object with a received and a sent property wich are arrays with the users with the status 'pending'
   */
  getPendingRequests = async () => {
    try {
      // In the following lines the unary plus ( + ) is used to convert the value to a number
      // Gets all the contacts with the contact_id of the current user id, the 'pending' status and 'requester' set to true
      const received = await Contact.findAll({
        where: {
          [Op.and]: [{ contact_id: +this.id }, { status: 'pending' }, { requester: true }],
        },
      });

      // Gets all the contacts with the user_id of the current user id, the 'pending' status and 'requester' set to true
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

  /**
   *
   * @param {number} contactId id of the contact to add
   *
   * @returns {boolean} true if the contact was added successfully, false otherwise
   */
  addContact = async contactId => {
    try {
      // Gets a contact with the 'user_id' of the current user id and 'contact_id' of the contactId passed as an argument or
      // Gets a contact with the 'user_id' of the contactId and 'contact_id' of the current user id
      // To check if the relation already exists
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

      // If the relation does not exist it creates a new one for both the user and the contact and returns true
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

      // If it already exists it just returns false
      return false;
    } catch (err) {
      throw err;
    }
  };

  /**
   *
   * @param {number} contactId id of the contact to accept
   * @returns {boolean} true when ok
   *
   */
  acceptContact = async contactId => {
    try {
      // Gets the sender contact request
      const senderRequest = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: +this.id }, { contact_id: +contactId }],
        },
      });

      // Gets the receiver contact request
      const receiverRequest = await Contact.findOne({
        where: {
          [Op.and]: [{ contact_id: +this.id }, { user_id: +contactId }],
        },
      });

      // Updates the status of both and set it to 'accepted'
      await senderRequest.update({
        status: 'accepted',
      });

      await receiverRequest.update({
        status: 'accepted',
      });

      // Returns true when successfull
      return true;
    } catch (err) {
      throw err;
    }
  };

  /**
   *
   * @param {number} contactId id of the contact to delete
   * @returns {boolean} true when ok
   *
   */
  deleteContact = async contactId => {
    try {
      // Gets the sender request
      const sender = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: +this.id }, { contact_id: contactId }],
        },
      });

      // Gets the receiver request
      const receiver = await Contact.findOne({
        where: {
          [Op.and]: [{ user_id: contactId }, { contact_id: +this.id }],
        },
      });

      // Deletes both
      await sender.destroy();
      await receiver.destroy();

      // Returns true when done
      return true;
    } catch (err) {
      throw err;
    }
  };

  /**
   * Gets all the tavern requests for a user
   * @returns {Array} of tavernRequests
   */
  getTavernRequests = async () => {
    try {
      const id = +this.id;
      // Gets the tavern requests for the user
      const tavernRequests = await TavernRequest.findAll({ where: { participant_id: id } });

      // Creates an empty array to store all the requests
      const requestsArray = [];
      for (const tavernRequest of tavernRequests) {
        // Finds the gamemaster aka the tavern creator by its id from the tavern request stored in the property gamemaster_id
        const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);
        // Creates a new entry in the requestsArray wich is an object with the gamemaster id, the tavern id and the creation date
        requestsArray.push({
          gamemaster,
          tavernId: tavernRequest.tavern_id,
          date: tavernRequest.createdAt,
        });
      }

      // Returns the tavernRequests array
      return requestsArray;
    } catch (err) {
      throw err;
    }
  };
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
    title: {
      type: Sequelize.TEXT,
      defaultValue: 'Apprenti aventurier',
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
