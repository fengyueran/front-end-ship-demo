const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']); //计算行数

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});

wc.on('close', () => {
  console.log('wc close');
});

setTimeout(() => {
  wc.stdin.write('0');
}, 3000);
