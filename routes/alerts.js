var express = require('express');
var router = express.Router();
/* GET home page. */
var motionAlert = [
    {
        "time" : "15.30",
        "location": "test",
        "description" : "camera"
    },
    {
        "time" : "16.30",
        "location": "test",
        "description" : "camera"
    }
];
var doorOperationAlert = [
    {
        "time" : "15.30",
        "location": "test",
        "description" : "door open"
    },
    {
        "time" : "16.30",
        "location": "test",
        "description" : "door close"
    }
]
var batteryIndictionAlert = [
    {
        "time" : "15.30",
        "location": "test",
        "description" : "heat 20%"
    },
    {
        "time" : "16.30",
        "location": "test",
        "description" : "heat 60%"
    }
]
router.get('/getAlertDetails', function(req, res, next) {
  console.log("api"+JSON.stringify(req.query));
  let queryParam = req.query;
  let response = {}
  if(queryParam.action =="camera"){
     response = motionAlert;
  }else if(queryParam.action =="battery"){
    response = batteryIndictionAlert;
  }
  else if(queryParam.action =="door"){
    response = doorOperationAlert;
  }
  res.end(JSON.stringify(response));
});

module.exports = router;