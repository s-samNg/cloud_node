require('dotenv').config();
const { User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signup = async (req, res) => {
    try {

        const {password} = req.body;

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({ ...req.body, password: hashedPassword });

        res.status(201).json({ user });
        // res.send('You are signup');

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }
}

exports.login = async (req, res) => {

    const {email, password} = req.body;
    const secretKey = process.env.SECRET_KEY;
    
    

    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user) {
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (passwordCompare) {

                const token = jwt.sign({ userId: user.id }, secretKey );
                res.status(200).json({ user, token }); 
            }else {
                res.status(401).json({ error: 'Mot de passe incorrecte' });
            }

            
        } else {
            res.status(404).json({ error: 'Aucun utilisateur trouvé' }); 
        }
       

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }


}






  