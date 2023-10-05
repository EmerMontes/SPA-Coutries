const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");
const putActivities = require("../controllers/putActivities");
const deleteActivity = require("../controllers/deleteActivity");
const router = Router();

router.get('/countries' , getCountries)
router.get('/countries/name' , getCountryByName)
router.get('/countries/:ID' , getCountryById)
router.post('/activities' , postActivities)
router.get('/activities' , getActivities)
router.put('/activities/:ID' , putActivities)
router.delete('/activities/:ID' , deleteActivity)



module.exports = router;
