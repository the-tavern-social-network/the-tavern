const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const io = require('../socket');
const getUserPendingRequests = require('../util/getUserPendingRequests');
const moment = require ('moment');

module.exports = {
  signUp: async (req, res, next) => {
    const regex = RegExp('/[A-Za-z0-9!@#$%^&*(),.?":{}|<>]/g');
    // const regex = RegExp("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$");
    const password = req.body.password;
    console.log(req.body.password);
    console.log(regex.test(password));
    const isGoodSize = req.body.password.length >= 8;
    const isSamePassword = req.body.password === req.body.confirmPassword;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword, saltRounds);
    req.body.confirmPassword = hashedConfirmPassword;
    req.body.birthdate = new Date(req.body.birthdate);

    const users = await User.findAll();
    const compareDate = (dateToCompare) => moment().diff(dateToCompare, 'years')
    
    console.log('++++++++++++++++++++++++++++++')
    console.log(req.body);
    // console.log(passwordValid);
    console.log()
    console.log('++++++++++++++++++++++++++++++')

    users.forEach((user) => {
      if (req.body.email === user.email) {
        res.status(500).send({
          message: 'Email déjà utilisé',
        })
      } else if (req.body.username === user.username) {
        res.status(500).send({
          message: 'Pseudo déjà utilisé',
        })
      } else if (req.body.email === '' || req.body.username === '' || req.body.password === '') {
        res.status(500).send({
          message: 'Tous les champs doivent être remplis',
        })
      } else if (moment().diff(req.body.birthdate, 'years') < 16) {
        res.status(500).send({
          message: "L'âge minimum requis est de 16 ans",
        })
      } else if (Object.prototype.toString.call(req.body.birthdate) === "[object Date]") {
        if (isNaN(req.body.birthdate.getTime())) {
          res.status(500).send({
            message: 'La date de naissance doit être renseignée',
          })
        } else if (!isSamePassword) {
          res.status(500).send({
            message: "Les mots de passe doivent être identiques",
          })
        } //else if (!isGoodSize) {
        //   res.status(500).send({
        //     message: "Le mot de passe doit contenir au minimum 8 charactères",
        //   })
        // } 
      } 
    })
  //   if(!regularExpression.test(newPassword)) {
  //     alert("password should contain atleast one number and one special character");
  //     return false;
  // }

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

    //	Looking for a user with the same email
    const user = await User.findOne({ include: 'posts', where: { email } });
    //	If no user found, send a 404 response
    if (!user) {
      return res.status(404).send({
        message: "Email ou mot de passe invalide.",
      });
    }
    //	checking for the password match
    const doMatch = await bcrypt.compare(password, user.password);
    //	if passwords don't match, send a 404 response
    if (!doMatch) {
      return res.status(401).send({
        message: "Email ou mot de passe invalide.",
      });
    }

    //	if the password matches, storing the user in the req.session (without the hashed password)
    req.session.user = user;

    io.getIo().emit('connected_user', `${user.username} is connected !`);

    //	sending back the user data to the client
    res.status(200).send({
      user: req.session.user,
      contacts: await req.session.user.getContacts(),
      pendingRequests: await getUserPendingRequests(user),
      tavernRequests: await user.getTavernRequests(),
      isLoggedIn: true,
    });
  },

  isLoggedIn: async (req, res, next) => {
    //  Checks if the user property exists in the req.session
    if (req.session.user) {
      const user = await User.findByPk(req.session.user.id, { include: 'posts' });

      req.session.user = user;

      //  if so sends back the user data to the client
      return res.status(200).send({
        user: req.session.user,
        contacts: await req.session.user.getContacts(),
        pendingRequests: await getUserPendingRequests(user),
        tavernRequests: await user.getTavernRequests(),
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
