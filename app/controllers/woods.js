const { Wood } = require('../models');

exports.readALL = async (req, res) => {

    try {
        const woods = await Wood.findAll();

        res.status(201).json({ woods });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }
    
}
