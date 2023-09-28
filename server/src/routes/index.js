const { Router } = require("express");
const countries = require('../controllers/countries')

const router = Router();
router.post('/',countries)

module.exports = router;
