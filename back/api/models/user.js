const { Sequelize, Model, Op } = require('sequelize');
const sequelize = require('../db/database');
const Contact = require('../models/contact');

class User extends Model {
  //? To verify
  getContacts = async () => {
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
  };

  //* OK
  getPendingRequests = async () => {
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
  };

  //* OK
  addContact = async (contactId) => {
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
  };

  //? To verify
  acceptContact = async (contactId) => {
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

    return await User.findByPk(+this.id);
  };

  //? to verify
  deleteContact = async (contactId) => {
    const sender = await Contact.findOne({
      where: {
        [Op.and]: [{ user_id: +this.id }, { contact_id: contactId }],
      },
    });

    const receiver = await Contact.findOne({
      where: {
        [Op.and]: [{ contact_id: +this.id }, { user_id: contactId }],
      },
    });

    await sender.destroy();
    await receiver.destroy();

    return true;
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
