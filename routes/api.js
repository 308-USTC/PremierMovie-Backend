var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.send('get request');
});
router.post('/', function(req, res, next) {
  res.send('please post with a parameter，respond with a resource');
});

router.post('/post', function(req, res, next) {
  console.log(req);
  var jO = {data:{id:1, name:'ouyong', autor: 'king'}, status: 1};

  res.send(JSON.stringify(jO));
});
module.exports = router;
