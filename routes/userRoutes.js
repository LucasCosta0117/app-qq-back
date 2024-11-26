const router = require('express').Router();
const userController = require('../controllers/userController');

// Rotas de Usuário
router 
    .route('/user/create') //Cadastrar um usuário
    .post((req, res) => userController.create(req, res));

router 
    .route('/user/get/all') //Listar todos usuários
    .get((req, res) => userController.getAll(req, res)) 

router
    .route('/user/get/active') //Listar todos usuários ativos
    .get((req, res) => userController.getAllActive(req, res))

router
    .route('/user/get/:email') //Buscar um usuário por email
    .get((req, res) => userController.getByEmail(req, res))

module.exports = router;