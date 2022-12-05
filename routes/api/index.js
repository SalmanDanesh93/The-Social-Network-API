const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const router = require('express').Router();

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
