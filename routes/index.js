const express = require('express');
const router  = express.Router();
const homePageController = require('../controllers/homePage');
const timestampController = require('../controllers/timeStamp');

router.get('/', homePageController.renderHomePage);

router.get('/api/timestamp/:date', timestampController.getTimeStamp);

module.exports = router;