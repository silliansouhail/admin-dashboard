const router = require('express').Router();
const general = require('../controllers/general')

router.get('/user/:id', general.getUser )
router.get('/dashboard', general.getDashboardStats)

module.exports = router 