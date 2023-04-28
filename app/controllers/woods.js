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

exports.readByHardness = async (req, res) => {
    
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

exports.create = async (req, res) => {
	

    try {

        const pathname = null; 

        if (req.file) {
            
           pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        }else {
            res.status(400).json({ error: "Uploadez votre image" });
        }
        
        const wood = await Wood.create({ ...JSON.parse(req.body.datas), image: pathname });
        res.status(201).json(wood);
        
        

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Erreur, contactez le support' });

    }
    
}
    