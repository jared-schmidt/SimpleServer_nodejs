var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html')
});

app.get('/home', function (req, res) {
  res.render('home.html')
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});
