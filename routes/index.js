var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/onMotionCapture', function(req, res, next) {
  req.app.locals.io.emit('onMotionCapture', req.body);
  res.send('POST request to the homepage')
});

router.post('/onHeatIndication', function(req, res, next) {
  req.app.locals.io.emit('onHeatIndication', req.body);
  res.send('POST request to the homepage')
});

router.post('/onOpenCloseDoor', function(req, res, next) {
  req.app.locals.io.emit('onOpenCloseDoor', req.body);
  res.send('POST request to the homepage')
});
module.exports = router;
