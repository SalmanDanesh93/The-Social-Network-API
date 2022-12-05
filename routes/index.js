const apiRoutes = require('./api');
const router = require('express').Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Invalid desination route.');
});
module.exports = router;