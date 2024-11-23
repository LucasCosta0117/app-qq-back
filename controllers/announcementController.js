const { Announcement } = require('../models/Announcement');

const announcementController = {
    create: async (req, res) => {
        try {
            const newAnnouncement = {
                owner:req.body.owner,
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                address: req.body.address,
                ratting: req.body.ratting,
                comments: req.body.comments
            }

            const response = await Announcement.create(newAnnouncement);

            res
            .status(201)
            .json({
                response: response,
                msg: "Anúncio criado com sucesso!"
            });
        } catch (error) {
            console,log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: 'Falha ao tentar criar o Anúncio'
            });
        }
    },
}

module.exports = announcementController;