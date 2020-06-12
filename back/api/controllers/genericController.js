const capitalize = require('../util/capitalize');

module.exports = {
  async getAll(req, res, next) {
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    const include = Object.keys(model.associations);

    const response = await model.findAll({
      include,
      order: [['id', 'ASC']],
    });
    res.send(response);
  },

  async create(req, res, next) {
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    const newCreatedModel = await model.create(req.body);

    const include = Object.keys(model.associations);

    const response = await model.findByPk(newCreatedModel.id, {
      include,
    });

    res.send(response);
  },

  async getOne(req, res, next) {
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    const { id } = req.params;

    const response = await model.findByPk(id);

    if (!response) {
      return next();
    }

    res.send(response);
  },

  async updateOne(req, res, next) {
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    const { id } = req.params;

    let response = await model.findByPk(id);
    if (response) {
      updatedModel = await response.update(req.body);
    } else {
      updatedModel = await model.create(req.body);
    }

    const include = Object.keys(model.associations);
    response = await model.findByPk(updatedModel.id, {
      include,
      order: [['id', 'ASC']],
    });

    res.send(response);
  },

  async deleteOne(req, res, next) {
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    const { id } = req.params;

    const response = await model.findByPk(id);
    await response.destroy();

    res.send({ response: 'Ok' });
  },
};
