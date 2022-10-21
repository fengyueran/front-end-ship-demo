const { spawn } = require('child_process');

spawn('pwd', {
  stdio: 'inherit',
});
