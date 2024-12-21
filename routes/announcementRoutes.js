const router = require('express').Router();
const announcementController = require('../controllers/announcementController');

//Rotas de Anúncio
router
    .route('/announcement/create')
    .post((req,res) => announcementController.create(req, res));

router
    .route('/announcement/get/all')
    .get((req, res) => announcementController.getAll(req, res));

router
    .route('/announcement/get/:id')
    .get((req, res) => announcementController.getById(req, res));

router
    .route('/announcement/delete/:id')
    .delete((req,res) => announcementController.delete(req, res));

router
    .route('/announcement/update')
    .put((req, res) => announcementController.update(req, res));

module.exports = router;