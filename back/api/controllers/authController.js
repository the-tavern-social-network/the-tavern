const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
  signUp: async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    req.body.birthdate = new Date(req.body.birthdate);

    let user = await User.create(req.body);

    if (!user) {
      return res.send({
        message: 'Une erreur est survenue durant la création de la ressource, veuillez réessayer.',
      });
    }

    res.send(user);
  },

  login: async (req, res, next) => {
    //	Retrieve infos from the form
    const email = req.body.email;
    const password = req.body.password;

    // Getting all user associations
    const include = Object.keys(User.associations);

    //	Looking for a user with the same email
    const user = await User.findOne({ include, where: { email } });
    //	If no user found, send a 404 response
    if (!user) {
      return res.status(404).send({
        message: "Pas d'utilisateur trouvé pour cet email.",
      });
    }
    //	checking for the password match
    const doMatch = await bcrypt.compare(password, user.password);
    //	if passwords don't match, send a 404 response
    if (!doMatch) {
      return res.status(401).send({
        message: 'Les données recues par le serveur ne sont pas correctes.',
      });
    }

    //	if the password matches, storing the user in the req.session (without the hashed password)
    req.session.user = user;

    //	sending back the user data to the client
    res.status(200).send({
      user: req.session.user,
      isLoggedIn: true,
    });
  },

  isLoggedIn: async (req, res, next) => {
    //  Checks if the user property exists in the req.session
    if (req.session.user) {
      // Getting all user associations
      const include = Object.keys(User.associations);

      const user = await User.findByPk(req.session.user.id, { include });
      //  if so sends back the user data to the client
      return res.status(200).send({
        user,
        isLoggedIn: true,
      });
    }

    res.status(401).end();
  },

  logout: async (req, res, next) => {
    req.session.destroy(() => {
      res.send({ user: {}, isLoggedIn: false });
    });
  },
};
