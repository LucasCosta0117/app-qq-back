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
    
            const response = await User.create(newUser);

            res
            .status(201)
            .json({
                response: response,
                msg: "Usuário criado com sucesso!"
            })
        } catch (error) {
            console.log(`Error: ${error}`);

            res
            .status(400)
            .json({
                response: error,
                msg: "Falha ao tentar criar o Usuário"
            })
        }


    }

}

module.exports = userController;