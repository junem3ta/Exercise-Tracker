const express = require("express"),
router = express.Router(),
cors = require('./cors');

router.post('/add', cors.corsWithOptions, async (req, res, next) => {

});

router.post('/new-user', cors.corsWithOptions, async (req, res, next) => {

});

module.exports = router;