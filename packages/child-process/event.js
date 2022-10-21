const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code, signal) => {
  console.log(`child process exited with code ${code}`);
});

const subprocess = spawn('node', ['long-task.js'], {
  detached: true,
  // stdio: 'ignore',
});

subprocess.on('close', (code) => {
  console.log(`subprocess process exited with code ${code}`);
});
