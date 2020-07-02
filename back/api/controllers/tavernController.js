const { TavernRequest, User } = require('../models');
const io = require('../socket');

module.exports = {
  async create(req, res, next) {
    const alreadyExist = await TavernRequest.findOne({
      where: { tavern_id: req.body.tavern_id, participant_id: req.body.participant_id },
    });

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

    const participant = await User.findByPk(+tavernRequest.participant_id, {
      include: 'tavernRequests',
    });

    res.send({ message: 'Invitation envoyée avec succès !', participant, gamemaster });
  },

  async delete(req, res, next) {
    const { tavernId: tavern_id } = req.params;
    const { gamemaster_id, participant_id } = req.body;

    let where = { tavern_id, participant_id, gamemaster_id };

    if (!gamemaster_id || !participant_id) {
      where = { tavern_id };
    }

    const tavernRequest = await TavernRequest.findOne({
      where,
    });

    const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);
    const participant = await User.findByPk(+tavernRequest.participant_id, {
      include: 'tavernRequests',
    });

    if (tavernRequest) {
      io.getIo().emit('delete_tavern_invite', {
        gamemaster,
        participant,
        tavernId: tavernRequest.tavern_id,
      });

      await tavernRequest.destroy();
    }

    res.send({
      tavernId: tavern_id,
      message: 'Cette tavern est fermée !',
      gamemaster,
      participant,
    });
  },
};
