const { Op } = require('sequelize');
const { TavernRequest } = require('../models');

module.exports = {
  async create(req, res, next) {
    const { userId, participantId, tavernId } = req.params;

    await TavernRequest.create({
      user_id: +userId,
      participant_id: +participantId,
      tavern_id: +tavernId,
    });

    res.send(/* ...something... */);
  },

  async delete(req, res, next) {
    // const { userId, participantId } = req.params;
    const { id } = req.params;

    // const tavernRequest = await TavernRequest.findAll({
    //   where: {
    //     [Op.and]: [{ user_id: +userId }, { participant_id: +participantId }],
    //   },
    // });

    const tavernRequest = await TavernRequest.findByPk(+id);

    await tavernRequest.destroy();

    res.send(/* ...something... */);
  },
};
