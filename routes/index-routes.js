const express = require('express');
const adminRoutes = require('./admin-routes');
const siteRoutes = require('./site-routes');

const router = express.Router();

router.use('/', siteRouter);
router.use('/admin-console', adminRouter);

module.exports = router;