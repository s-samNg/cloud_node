const { Wood } = require('../models');

exports.readALL = async (req, res) => {

    try {
        const woods = await Wood.findAll();

        res.status(200).json({ woods });

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }
    
}

exports.findByHardness = async (req, res) => {
    
    const {hardness} = req.params;

    try {
        const woods = await Wood.findAll({
            where: {
                hardness: hardness
             }   
        })
        
        res.status(200).json({ woods });

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });
    }
}
