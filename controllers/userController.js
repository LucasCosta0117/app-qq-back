const { hash } = require('bcrypt');
const { randomInt } = require('crypto');

const { User } = require('../models/User');

const userController = {
    create: async (req, res) => {
        try {           
            const existingUser = await User.findOne({ email: req.body.email, active: true });
            
            if (existingUser) {
                return res.status(409).json({ 
                    msg: 'Email de Usuário já cadastrado.' 
                });
            }

            const randomSalt = randomInt(10, 16);
            const passwordHash = await hash(req.body.password, randomSalt);

            const newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                photo_url: req.body.photo_url,
                contact: req.body.contact,
                email: req.body.email,
                password: passwordHash
            }

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
    },
    update: async (req, res) => {
        try {
            const updateUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                photo_url: req.body.photo_url,
                contact: req.body.contact,
            }

            const email = req.body.email;
            const response = await User.findOneAndUpdate({email: email}, {$set: updateUser});

            if (!response) {
                return res.status(404).json({ msg: 'Usuário não encontrado' });
            }
    
            res.status(200).json({
                response: updateUser,
                msg: 'Informações atualizadas com sucesso!'
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res.status(400).json({
                response: error,
                msg: "Falha ao atualizar os dados do Usuário!"
            });
        }
    }
    /**
     * @todo Método para atualizar a senha do usuário.
     */
}

module.exports = userController;