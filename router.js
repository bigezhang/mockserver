const express = require('express');
const router = express.Router();
const apis = require('./apis');

router.get('/', function (req, res) {
  res.json({
    'success': 'success',
    'data': apis
  })
});

router.get('/grabredenvelope/newrewards', function(req, res) {
	res.json(require('./api/rewards'))
});

router.get('/grabredenvelope/getlist', function(req, res) {
	res.json(require('./api/newrewards'))
});

router.get('/grabredenvelope/rewards', function(req, res) {
	res.json(require('./api/myrewards'))
});

router.get('/xc_v6/FestivalApi/time_range', function(req, res) {
	res.json(require('./api/datelist'))
});

router.get('/xc_v6/FestivalApi/class_list', function(req, res) {
	res.json(require('./api/classlist'))
});

router.get('/xc_v6/FestivalApi/juhui_list', function (req, res) {
  res.json(require('./api/classbanner'))
});

module.exports = router;
