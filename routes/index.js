var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  console.log('*************');
  console.log('*************');
  console.log('*************');

   console.log('\n******\n'+ req.headers.cookie , /user=admin/.test(req.headers.cookie)  +'\n*******\n');

  console.log('*************');
  console.log('*************');


  if(/user=admin/.test(req.headers.cookie)){
    res.render('layout.html');
  }else{
    res.render('page-login.html');
  }

});

module.exports = router;
