var express = require('express');
var fs = require('fs')
var multer = require('multer')
var path = require('path')

var router = express.Router();

router.use(multer({ dest: './public/img' }).any())

router.post('/file', function (req, res, next) {
    var file = req.files[0];
    var oldname = file.filename
    var newname = oldname + path.parse(file.originalname).ext
    fs.renameSync('./public/img/' + oldname, './public/img/' + newname)
    res.send(newname)
});

module.exports = router;
