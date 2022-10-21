const { spawn } = require('child_process');

const subprocess = spawn('node', ['./child.js'], {
  stdio: ['inherit', 'inherit', 'inherit'],
});

subprocess.on('message', function (message) {
  console.log(`Receive message from child: ${JSON.stringify(message)}`);
});

subprocess.send({ from: 'parent' });
