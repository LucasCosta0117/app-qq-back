const { Sponsor } = require('../models/Sponsor');

const sponsorController = {
    create: async (req, res) => {
        try {
            const newSponser = {
                name: req.body.name,
                propaganda: req.body.propaganda,
                links: req.body.links
            }

            const response = await Sponsor.create(newSponser);

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

module.exports = sponsorController;