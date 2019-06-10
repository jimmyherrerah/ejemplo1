var express = require('expres');
var router = express.Router();

var personaRoutes = require('./personas');

router.use('/personas', personaRoutes);

module.exports = router;