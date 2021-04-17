const router = require('express').Router();
// Imports all of the API routes from /api/index
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = router;
