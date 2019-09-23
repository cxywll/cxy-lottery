var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const https = require("https");
const fs = require("fs");
const cheerio = require("cheerio");



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filesRouter = require('./routes/file');
var datasRouter = require('./routes/data')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/files', filesRouter);
app.use('/data',datasRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//抓取数据
setInterval(() => {
  https.get("https://kuai3.cjcp.com.cn/beijing/", function (res) {
    res.setEncoding("utf8");
    let html = "";
    res.on("data", function (data) {
      html += data;
    });
    res.on("end", function () {
      const $ = cheerio.load(html);
      var file = []
      $("#kjinfos1 tr").each(function (index, element) {
        const el = $(element);

        if (el.find('td').eq(1).text() == "-") return;
        file.push({
          期号: el.find('td').eq(0).text(),
          时间: el.find('td').eq(1).text(),
          奖号: el.find('td').eq(2).text(),
        })
      });
      fs.writeFile("data.txt", JSON.stringify(file), function (err) {
        if (err) return;
        console.log("成功")
      });
    })
  });
}, 120000)






app.listen(8000)
module.exports = app;
