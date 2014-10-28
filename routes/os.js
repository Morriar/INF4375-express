var os = require('os');
var express = require('express');
var router = express.Router();

/* GET os basic infos */
router.get('/', function(req, res) {
  res.json({
  	hostname: os.hostname(),
  	type: os.type(),
  	platform: os.platform(),
  });
});

/* GET os cpus */
router.get('/cpus', function(req, res) {
  res.json(os.cpus());
});

/* GET cpu infos */
router.get('/cpus/:id', function(req, res) {
  var id = parseInt(req.params.id);
  res.json(os.cpus()[id]);
});

module.exports = router;
