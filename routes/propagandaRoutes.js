const router = require('express').Router();
const propagandaController = require('../controllers/propagandaController');

//Rotas de Propaganda
router
    .route('/propaganda/create')
    .post((req,res) => propagandaController.create(req, res));

router
    .route('/propaganda/get/all')
    .get((req, res) => propagandaController.getAll(req, res));

router
    .route('/propaganda/get/:id')
    .get((req, res) => propagandaController.getById(req, res));

router
    .route('/propaganda/delete/:id')
    .delete((req,res) => propagandaController.delete(req, res));

router
    .route('/propaganda/update')
    .put((req, res) => propagandaController.update(req, res));

module.exports = router;