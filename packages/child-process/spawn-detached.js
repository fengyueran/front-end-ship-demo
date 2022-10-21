const { spawn } = require('child_process');

const subprocess = spawn('node', ['long-task.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.on('close', (code) => {
  console.log(`subprocess process exited with code ${code}`);
});

subprocess.unref();
