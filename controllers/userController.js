const { User } = require('../models/User');

const userController = {
    create: async (req, res) => {
        try {
            const newUser = {
                first_name: req.body.first_name,
                second_name: req.body.second_name,
                photo_url: req.body.photo_url,
                contact: req.body.contact,
                email: req.body.email,
                password: req.body.password
            }
            
            const existingUser = await User.findOne({ email: req.body.email, active: true });
            
            if (existingUser) {
                return res.status(409).json({ 
                    msg: 'Email de Usuário já cadastrado.' 
                });
            }
            
            /**
             * @todo criptografar a senha do usuário antes de mandar para o db
             */
            const response = await User.create(newUser);

            res.status(201).json({
                response: response,
                msg: "Usuário criado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao criar o Usuário"
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.find();

            if (!users) {
                return res.status(404).json({ 
                    msg: 'Não existem usuários ativos no momento' 
                });
            }
            
            res.status(200).json(users);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter a lista de Usuários"
            });
        }
    },
    getAllActive: async (req, res) => {
        try {
            const users = await User.find({ active: true });

            if (!users) {
                return res.status(404).json({
                    msg: 'Não existem usuários ativos no momento'
                });
            }

            res.status(200).json(users);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter a lista de Usuários"
            });
        }
    },
    getByEmail: async (req, res) => {
        try {
            const email = req.params.email;
            const user = await User.findOne({ email: email });

            if (!user) {
                return res.status(404).json({
                    msg: 'Usuário não encontrado!'
                });
            }
            
            res.status(200).json(user);
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao obter o Usuário com o e-mail fornecido!"
            });
        }
    },
    delete: async (req, res) => {
        try {
            const email = req.params.email;
            const user = await User.findOne({ email: email });
            
            if (!user) {
                return res.status(404).json({
                    msg: 'Usuário não encontrado'
                });
            }

            await User.deleteOne({ email: email });
            
            res.status(200).json({
                response: user,
                msg: "Usuário deletado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao deletar o Usuário com o e-mail fornecido!"
            });
        }
    },
    disable: async (req, res) => {
        try {
            const email = req.params.email;
            const existingUser = await User.findOne({ email: email, active: true });
            
            if (!existingUser) {
                return res.status(404).json({
                    msg: 'Usuário não encontrado'
                });
            }

            const response = await User.updateOne({ email: email }, { $set: {active: false}});
            
            res.status(200).json({
                response: response,
                msg: "Usuário desativado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao desativar o Usuário!"
            });
        }
    }
}

module.exports = userController;