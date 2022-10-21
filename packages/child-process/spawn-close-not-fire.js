const { spawn } = require('child_process');

const subProcess = spawn('node', ['write-to-stderr.js', '24906']);

subProcess.on('error', function (error) {
  console.log(`error:${code}`);
});

subProcess.on('close', function (code) {
  console.log(`close:${code}`);
});

subProcess.on('exit', function (code) {
  console.log(`exit:${code}`);
});

subProcess.stdout.on('data', function (data) {
  console.log('stdout' + data);
});

subProcess.stderr.on('data', function (data) {});
