const router = require('express').Router();
const management = require('../controllers/management')

router.get('/admins',management.getAdmins)
router.get('/performance/:id',management.getPerformance)

module.exports = router 