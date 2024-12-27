const { Propaganda } = require('../models/Propaganda');

const propagandaController = {
    create: async (req, res) => {
        try {
            const newPropaganda = {
                sponsor: req.body.sponsor,
                image_url: req.body.image_url,
                links: req.body.links
            }

            const response = await Propaganda.create(newPropaganda);

            res
            .status(201)
            .json({
                response: response,
                msg: "Propaganda criada com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao tentar criar a Propaganda"
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const propaganda = await Propaganda.find();
            
            res.status(200).json(propaganda);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter a lista de Propagandas"
            });
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const propaganda = await Propaganda.findById(id);

            if (!propaganda) {
                return res.status(404).json({
                    msg: 'Propaganda não encontrada!'
                });
            }

            res.status(200).json(propaganda);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter a Propaganda com _id fornecido!"
            });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const propaganda = await Propaganda.findOne({ _id: id });
            
            if (!propaganda) {
                return res.status(404).json({
                    msg: 'Propaganda não encontrada'
                });
            }

            await Propaganda.deleteOne({ _id: id });
            
            res.status(200).json({
                response: user,
                msg: "Propaganda deletada com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao deletar a Propaganda."
            });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const updatePropaganda = {
                sponsor: req.body.sponsor,
                image_url: req.body.image_url,
                links: req.body.links
            }

            const response = await Propaganda.findByIdAndUpdate(id, updatePropaganda);

            if (!response) {
                return res.status(404).json({ msg: 'Propaganda não encontrada' });
            }
    
            res.status(200).json({
                response: updateUser,
                msg: 'Informações atualizadas com sucesso!'
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao atualizar os dados da Propaganda!"
            });
        }
    }

}

module.exports = propagandaController;