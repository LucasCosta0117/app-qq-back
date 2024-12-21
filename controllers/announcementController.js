const { Announcement } = require('../models/Announcement');

const announcementController = {
    create: async (req, res) => {
        try {
            const newAnnouncement = {
                owner: req.body.owner,
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                images_url: req.body.images_url,
                address: req.body.address,
                tags: req.body.tags,
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
            console.log(`Error: ${error}`);

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
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const announcement = await Announcement.findById(id);

            if (!announcement) {
                return res.status(404).json({
                    msg: 'Anúncio não encontrado!'
                });
            }

            res.status(200).json(announcement);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter o Anúncio com _id fornecido!"
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
                tags: req.body.tags,
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
    /**
     * @todo Criar dois novos métodos para realizar a Avaliação de um anúncio, e um Comentário em um anúncio
     * Para a avaliação, receber do front o ID do user logado e a nota. Na regra de negócio fazemos o cálculo 
     * da nova média e adicionamos o EMAIL a lista de userList da prop ratting. PS: a validação se o user pode avaliar novamente
     * pode ser feita no front, enviando a lista de user para verificar se o user que está avaliando já o fez.
     */
}

module.exports = announcementController;