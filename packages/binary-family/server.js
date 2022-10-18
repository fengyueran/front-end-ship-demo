const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.text());

app.post('/upload', function (req, res) {
  console.log('body', req.body);
});

app.get('/ajax', function (req, res) {
  console.log('/ajax');
  res.send('hello world');
});

app.listen(8081, function () {
  console.log('listening on port', 8081);
});
