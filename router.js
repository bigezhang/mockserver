const express = require('express');
const router = express.Router();
const apis = require('./apis');

router.get('/', function (req, res) {
  res.json({
    'success': 'success',
    'data': apis
  })
});

router.get('/demoapi', function(req, res) {
	res.json(require('./api/v1/demoapi'))
});

module.exports = router;
