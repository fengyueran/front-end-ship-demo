const { spawn } = require('child_process');

const subprocess = spawn('ls', {
  stdio: 'pipe',
});

console.log(subprocess.stdio[0] === subprocess.stdin); //true
console.log(subprocess.stdio[1] === subprocess.stdout); //true
console.log(subprocess.stdio[2] === subprocess.stderr); //true

subprocess.stdout.on('data', function (data) {
  console.log(`data from child: ${data}`);
});

subprocess.on('close', function (code) {
  console.log(`child exists with code: ${code}`);
});
