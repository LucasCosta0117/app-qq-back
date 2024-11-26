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
            
            /**
             * @todo validar se o e-mail já existe no banco e está ativo
             * @todo criptografar a senha do usuário antes de mandar para o db
             */
            const response = await User.create(newUser);

            res
            .status(201)
            .json({
                response: response,
                msg: "Usuário criado com sucesso!"
            });
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao criar o Usuário"
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.find();

            if (!users) {
                res
                .status(404)
                .json({ 
                    msg: 'Não existem usuários ativos no momento' 
                });

                return;
            }
            
            res
            .status(200)
            .json(users);
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao obter a lista de Usuários"
            });
        }
    },
    getAllActive: async (req, res) => {
        try {
            const users = await User.find({ active: true });

            if (!users) {
                res
                .status(404)
                .json({
                    msg: 'Não existem usuários ativos no momento'
                });
                
                return;
            }

            res
            .status(200)
            .json(users);
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
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
                res
                .status(404)
                .json({
                    msg: 'Usuário não encontrado!'
                });
                
                return;
            }
            
            res
            .status(200)
            .json(user);
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao obter o Usuário com o e-mail fornecido!"
            });
        }
    }
}

module.exports = userController;