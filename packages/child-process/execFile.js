const { execFile } = require('child_process');
const util = require('util');
const execFilePromise = util.promisify(execFile);

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

execFile(
  '/Users/xinghunm/.nvm/versions/node/v16.10.0/bin/node',
  ['--version'],
  (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  }
);

execFile('ls -a', { shell: '/bin/bash' }, function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log('ls -a output:', stdout);
});

const testPromiseExec = async () => {
  try {
    const { stdout, stderr } = await execFilePromise('node', ['--version']);
    console.log('testPromiseExec stdout:', stdout);
    console.error('testPromiseExec stderr:', stderr);
  } catch (error) {
    console.error('testPromiseExec error:', error);
  }
};
testPromiseExec();

const abortExample = () => {
  const controller = new AbortController();
  const { signal } = controller;
  const process = execFile('node', ['--version'], { signal }, (error) => {
    console.log(`node --version error:${error}`); // AbortError
  });

  controller.abort();
};

abortExample();
