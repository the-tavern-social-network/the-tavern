const { TavernRequest, User } = require('../models');
const io = require('../socket');

module.exports = {
  async create(req, res, next) {
    const alreadyExist = await TavernRequest.findOne({ where: { tavern_id: req.body.tavern_id, participant_id: req.body.participant_id} });

    if (alreadyExist) {
      return res.send({ message: 'Vous avez déjà envoyé une invitation à ce contact !' });
    }

    const tavernRequest = await TavernRequest.create(req.body);
    const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);
    io.getIo().emit('tavern_invite', {
      gamemaster,
      participantId: tavernRequest.participant_id,
      tavernId: tavernRequest.tavern_id,
      date: tavernRequest.createdAt,
    });

    res.send({ message: 'Invitation envoyée avec succès !' });
  },

  async delete(req, res, next) {
    const { tavernId: tavern_id } = req.params;

    const tavernRequest = await TavernRequest.findOne({ where: { tavern_id } });
    io.getIo().emit('delete_tavern_invite', {
      participantId: tavernRequest.participant_id,
      tavernId: tavernRequest.tavern_id,
    });

    await tavernRequest.destroy();

    res.send({ tavernId: tavern_id, message: 'Cette tavern est fermée !' });
  },
};
