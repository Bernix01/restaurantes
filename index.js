var express = require("express");

var app = express();
app.use(express.static(__dirname + '/docs'));
app.post('/', function (req, res) {
  res.sendFile(__dirname + '/docs/index.html');
});
app.listen(process.env.PORT || 80, function () {
    console.log('Node app is running on port', process.env.PORT || 80);
});
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/docs/index.html');
});