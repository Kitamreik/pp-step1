const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


router.route('/admin')
    .get(adminController.admin)
    .post(adminController.admin);

router.route('/login')
    .get(adminController.login);


module.exports = router;