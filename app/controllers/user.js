// const User = require('../models/user');
const { User } = require("../models");

exports.signup = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });

        res.status(201).json({ user });
        // res.send('You are signup');

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }
}
 




exports.login = (req, res) => {
    console.log(req.body)
    res.json(req.body)
    res.send('You are login'); 
}






  