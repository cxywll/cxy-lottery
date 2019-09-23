var express = require('express');
var router = express.Router();
var fs = require('fs')


//注册
router.post('/up', function (req, res, next) {
  var json = req.body;
  if (json.user == '' || json.pass == '') {
    res.send({
      type: 0,
      data: '请输入账号和密码'
    })
  } else {
    var user_status = true
    var text = eval(fs.readFileSync('./login.txt', 'utf8'))
    for (var i = 0; i < text.length; i++) {
      if (text[i].user == json.user) {
        user_status = false
      }
    }
    if (user_status) {
      text.push(json)
      fs.writeFileSync('./login.txt', JSON.stringify(text), 'utf8')
      res.send({
        type: 1,
        data: '注册成功'
      })
    } else {
      res.send({
        type: 2,
        data: '账号已注册'
      })
    }

  }
});
//登录
router.post('/in', function (req, res, next) {
  var json = req.body;
  if (json.user == "" || json.pass == "") {
    res.send({
      type: 0,
      data: '请输入账号和密码'
    })
  } else {
    var user_status = true
    var text = eval(fs.readFileSync('./login.txt', 'utf8'))
    for (var i = 0; i < text.length; i++) {
      if (text[i].user == json.user && text[i].pass == json.pass) {
          user_status = false
      }
    }
    if (user_status) {
      res.send({
        type: 1,
        data: '账号密码不匹配'
      })
    } else {
      res.send({
        type: 2,
        data: text
      })
    }
  }
});
module.exports = router;
