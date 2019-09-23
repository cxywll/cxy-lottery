var express = require('express')
var fs = require('fs')
var router = express.Router()


router.get('/data',function(req,res){
    var json = req.query;
    var data = eval(fs.readFileSync('data.txt','utf8'))
    res.send(data)
})


module.exports = router;
