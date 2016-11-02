const router = require('express').Router()
const controller = require('../controllers/foodTruck.js')
router.get('', controller.get)

module.exports = router
