const router = require('express').Router();
// import all of the API routes from /api/index.js
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


module.exports = router;