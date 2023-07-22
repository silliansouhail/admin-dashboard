const router = require('express').Router();
const sales = require('../controllers/sales')

router.get('/sales',sales.getSales)


module.exports = router 