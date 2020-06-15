const capitalize = require('../util/capitalize');

module.exports = {
  async getAll(req, res, next) {
    // Getting the model name from the req.params.entity and converting first letter
    // to a capital one to match models definitions
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    // Getting all model associations
    const include = Object.keys(model.associations);

    // fetching data from database
    const response = await model.findAll({
      include,
      order: [['id', 'ASC']],
    });

    // Sending data fetched from the database
    res.send(response);
  },

  async create(req, res, next) {
    // Getting the model name from the req.params.entity and converting first letter
    // to a capital one to match models definitions
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    // Creates a new entry for the model from the req.body data
    const newCreatedModel = await model.create(req.body);

    // Getting all model associations
    const include = Object.keys(model.associations);

    // Fetching the newly created entry with its associations
    const response = await model.findByPk(newCreatedModel.id, {
      include,
    });

    // Sending back the newly created entry
    res.send(response);
  },

  async getOne(req, res, next) {
    // Getting the model name from the req.params.entity and converting first letter
    // to a capital one to match models definitions
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    // Getting the id from the req.params
    const { id } = req.params;

    // Getting all model associations
    const include = Object.keys(model.associations);

    // Looking for an entry with the id from the request including its associations
    const response = await model.findByPk(id, {
      include,
    });

    if (!response) {
      return next();
    }

    // Sending back the found entry
    res.send(response);
  },

  async updateOne(req, res, next) {
    // Getting the model name from the req.params.entity and converting first letter
    // to a capital one to match models definitions
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    // Getting the id from the req.params
    const { id } = req.params;

    // Fetching the entry by its id from the req.params
    let response = await model.findByPk(id);

    if (response) {
      // Updates the entry with the data from the req.body
      updatedModel = await response.update(req.body);
    } else {
      return next();
      // updatedModel = await model.create(req.body);
    }

    // Getting all model associations
    const include = Object.keys(model.associations);

    // Fetching the updated entry with its associations
    response = await model.findByPk(updatedModel.id, {
      include,
    });

    // Sending back the updated entry
    res.send(response);
  },

  async deleteOne(req, res, next) {
    // Getting the model name from the req.params.entity and converting first letter
    // to a capital one to match models definitions
    const entity = capitalize(req.params.entity);
    const model = models[entity];

    if (!model) {
      return next();
    }

    // Getting the id from the req.params
    const { id } = req.params;

    // Fetching the entry by its id from the req.params
    const response = await model.findByPk(id);

    // Deletes the found entry
    await response.destroy();

    // Sending back a success message
    res.send({ response: 'Ok' });
  },
};
