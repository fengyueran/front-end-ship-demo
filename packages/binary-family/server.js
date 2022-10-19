const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '')));
// app.use(bodyParser.text());

app.get('/ajax', function (req, res) {
  console.log('/ajax');
  res.send('hello world');
});

app.post('/upload', function (req, res) {
  const chunks = [];

  req.on('data', (buf) => {
    chunks.push(buf);
  });
  req.on('end', () => {
    let buffer = Buffer.concat(chunks);
    console.log(buffer.toString());
    res.sendStatus(200);
  });
});

app.listen(8081, function () {
  console.log('listening on port', 8081);
});
