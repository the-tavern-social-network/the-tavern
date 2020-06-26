const { TavernRequest } = require('../models');

module.exports = {
  async create(req, res, next) {
    const alreadyExist = await TavernRequest.findOne({ where: { tavern_id: req.body.tavern_id } });

    if (alreadyExist) {
      return res.send({ message: 'Vous avez déjà envoyé une invitation à ce contact !' });
    }

    await TavernRequest.create(req.body);

    res.send({ message: 'Invitation envoyée avec succès !' });
  },

  async delete(req, res, next) {
    const { tavernId: tavern_id } = req.params;

    const tavernRequest = await TavernRequest.findOne({ where: { tavern_id } });

    await tavernRequest.destroy();

    res.send('ok');
  },
};
