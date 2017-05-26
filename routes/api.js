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

router.post('/session', function(req, res, next) {
  console.log(req.body);

  res.cookie('user', 'admin', {
    httpOnly: true,
    expires: 0 //cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
    // maxAge: 20*1000
  });
  // var jO = {message:'添加cookie成功', status: 1};
  // res.send(JSON.stringify(jO));
  res.redirect('/');
  
});

router.get('/logout', function(req, res, next) {
  console.log(req.body);
  res.clearCookie('user'); // 删除cookie
  res.redirect('/');
});



module.exports = router;
