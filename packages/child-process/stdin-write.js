const { spawn } = require('child_process');

const grep = spawn('grep', ['test']);

setTimeout(function () {
  grep.stdin.write('hello nodejs \n hello javascript');
  grep.stdin.end();
}, 2000);

grep.stdout.on('data', function (data) {
  console.log('data from grep: ' + data);
});

grep.on('exit', function (code) {
  console.log('grep exit with code: ' + code);
});

grep.on('close', function (code) {
  console.log('grep close with code: ' + code);
});
