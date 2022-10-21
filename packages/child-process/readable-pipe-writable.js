const { spawn } = require('child_process');

const child = spawn('wc', ['-m']);

process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
  console.log(data);
});
