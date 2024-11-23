const router = require('express').Router();
const userController = require('../controllers/userController');

//Rotas de Usuário
router.route('/user').post((req, res) => userController.create(req, res)) //Cadastrar um usuário


module.exports = router;