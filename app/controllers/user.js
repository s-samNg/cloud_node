// const User = require('../models/user');
const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup = async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({ ...req.body, password: hashedPassword });

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






  