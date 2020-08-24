const { TavernRequest, User } = require('../models');
const io = require('../socket');

module.exports = {
  async create(req, res, next) {
    // Checks if the request already exists
    const alreadyExist = await TavernRequest.findOne({
      where: { tavern_id: req.body.tavern_id, participant_id: req.body.participant_id },
    });

    // If it exists, sends an error message and stops the function execution
    if (alreadyExist) {
      return res.send({ message: 'Vous avez déjà envoyé une invitation à ce contact !' });
    }

    // Creates a new tavernRequest
    const tavernRequest = await TavernRequest.create(req.body);
    // Gets the gamemaster by the gamemaster_id of the tavernRequest
    const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);

    // Sends the request by sockets for a real-time experience
    io.getIo().emit('tavern_invite', {
      gamemaster,
      participantId: tavernRequest.participant_id,
      tavernId: tavernRequest.tavern_id,
      date: tavernRequest.createdAt,
    });

    // Gets the participant wich is the invited contact
    const participant = await User.findByPk(+tavernRequest.participant_id, {
      include: 'tavernRequests',
    });

    // Sends back the participant and gamemaster infos
    res.send({ message: 'Invitation envoyée avec succès !', participant, gamemaster });
  },

  async delete(req, res, next) {
    // Gets the tavern_id from the req.params, the gamemaster and participant_id from the req.body
    const { tavernId: tavern_id } = req.params;
    const { gamemaster_id, participant_id } = req.body;

    // This is used to pass to the where clause
    let where = { tavern_id, participant_id, gamemaster_id };

    // If there's no gamemaster_id or participant_id the where variable is just going to contain the tavern id
    if (!gamemaster_id || !participant_id) {
      where = { tavern_id };
    }

    // Gets a tavernRequest by the where clause
    const tavernRequest = await TavernRequest.findOne({
      where,
    });

    if (tavernRequest) await tavernRequest.destroy();

    // Gets the gamemaster and particiant by their respective id's
    const gamemaster = await User.findByPk(tavernRequest.gamemaster_id);
    const participant = await User.findByPk(+tavernRequest.participant_id, {
      include: 'tavernRequests',
    });

    if (tavernRequest) {
      // Sends the infos by socket to get the real-time experience
      io.getIo().emit('delete_tavern_invite', {
        gamemaster,
        participant,
        tavernId: tavernRequest.tavern_id,
      });
    }

    // Sends back the tavernId, the gamemaster and participant infos
    res.send({
      tavernId: tavern_id,
      message: 'Cette tavern est fermée !',
      gamemaster,
      participant,
    });
  },
};
