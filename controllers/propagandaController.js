const { Propaganda } = require('../models/Propaganda');

const propagandaController = {
    create: async (req, res) => {
        try {
            const newPropaganda = {
                name: req.body.name,
                propaganda: req.body.propaganda,
                links: req.body.links
            }

            const response = await Propaganda.create(newPropaganda);

            res
            .status(201)
            .json({
                response: response,
                msg: "Patrocinador criado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao tentar criar o Patrocinador"
            })
        }
    }

}

module.exports = propagandaController;