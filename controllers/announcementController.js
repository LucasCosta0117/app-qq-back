const { Announcement } = require('../models/Announcement');

const announcementController = {
    create: async (req, res) => {
        try {
            const newAnnouncement = {
                owner:req.body.owner,
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                images_url: req.body.images_url,
                address: req.body.address,
                tags: req.body.adress,
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
    getAll: async (req, res) => {
        try {
            const announcement = await Announcement.find();
            
            res.status(200).json(announcement);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter a lista de Anúncios"
            });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const announcement = await Announcement.findOne({ _id: id });
            
            if (!announcement) {
                return res.status(404).json({
                    msg: 'Anúncio não encontrado'
                });
            }

            await Announcement.deleteOne({ _id: id });
            
            res.status(200).json({
                response: user,
                msg: "Anúncio deletado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao deletar o Anúncio."
            });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const updateAnnouncement = {
                owner:req.body.owner,
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                images_url: req.body.images_url,
                address: req.body.address,
                tags: req.body.adress,
                ratting: req.body.ratting,
                comments: req.body.comments
            }

            const response = await Announcement.findByIdAndUpdate(id, updateAnnouncement);

            if (!response) {
                return res.status(404).json({ msg: 'Anúncio não encontrado' });
            }
    
            res.status(200).json({
                response: updateUser,
                msg: 'Informações atualizadas com sucesso!'
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao atualizar os dados do Anúncio!"
            });
        }
    }
}

module.exports = announcementController;