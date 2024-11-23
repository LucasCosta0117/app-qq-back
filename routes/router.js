const router = require('express').Router();
const announcementRoutes = require('./announcementRoutes');
const propagandaRoutes = require('./propagandaRoutes');
const userRoutes = require('./userRoutes');

//Rotas de Anúncio
router.use('/', announcementRoutes);

//Rotas de Patrocinador
router.use('/', propagandaRoutes);

//Rotas de Usuário
router.use('/', userRoutes);

module.exports = router;