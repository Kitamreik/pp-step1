const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.index)
    .post(siteController.index);
// confirmation page

router.route('/videogallery')
    .get(siteController.about);

    // works in siteCtrl, not adminCtrl
router.route('/createlog')
    .get(siteController.create_log);

router.route('/deletelog')
    .get(siteController.delete_log);

router.route('/updatelog')
    .get(siteController.update_log);

    // works in siteCtrl, not adminCtrl

router.route('/login')
    .get(siteController.login);

router.route('/contactus')
    .get(siteController.contact_us);

router.route('/map')
    .get(siteController.map);

router.route('/photogallery')
    .get(siteController.photogallery);

router.route('/tj-quiz')
    .get(siteController.tj_quiz);

router.route('/tj-answers')
    .get(siteController.tj_answers); 
       
module.exports = router;