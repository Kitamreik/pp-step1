const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.index);

router.route('/videogallery')
    .get(siteController.about);

router.route('/login')
    .get(siteController.login);

router.route('/contactus')
    .get(siteController.contact_us);

router.route('/map')
    .get(siteController.map);

router.route('/photogallery')
    .get(siteController.photogallery);
    
module.exports = router;