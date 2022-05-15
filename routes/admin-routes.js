const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

router.route('/login')
    .get(adminController.login)
    .post(adminController.login);
    // PURPOSE: To allow Users to log in and see the admin-console

//Add Create/Update/Delete here?

router.route('/createlog')
    .get(adminController. create_log);
router.route('/updatelog')
    .get(adminController. update_log);
router.route('/deletelog')
    .get(adminController. delete_log);


module.exports = router;