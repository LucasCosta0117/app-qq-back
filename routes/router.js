const router = require('express').Router();
const announcementRoutes = require('./announcementRoutes');
const sponsorRoutes = require('./sponsorRoutes');
const userRoutes = require('./userRoutes');

//Rotas de Anúncio
router.use('/', announcementRoutes);

//Rotas de Patrocinador
router.use('/', sponsorRoutes);

//Rotas de Usuário
router.use('/', userRoutes);

module.exports = router;