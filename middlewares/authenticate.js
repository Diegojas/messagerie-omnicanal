const basicAuth = require('basic-auth');
const { User } = require("../models");
const bcrypt = require("bcrypt");

const authenticate = async (req, res, next) => {
    const credentials = basicAuth(req);
    if (!credentials) {
        return res.status(401).send({ message: "L'authentification est requise"});
    }

    const name = credentials.name;
    const password = credentials.pass;
    const user = await User.findOne({ where: { name }});

    if (!user) {
        return res.status(401).send({ message: "Aucun n'utilisateur trouvé. Veuillez revoir le nom"});
    }

    if (!bcrypt.compareSync(password, user.password))  {
        return res.status(401).send({ message: "Le mot de passe renseigné est incorrect"});
    }

    req.user = user

    next();
};

module.exports = { authenticate }