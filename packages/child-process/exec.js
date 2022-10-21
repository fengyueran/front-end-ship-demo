const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// exec('ls -a', function (error, stdout, stderr) {
//   if (error) {
//     console.error(`error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

// exec('ls -a', { cwd: '/' }, function (error, stdout, stderr) {
//   if (error) {
//     console.error(`error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

exec('ls "./test folder"', function (error, stdout, stderr) {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const testPromiseExec = async () => {
  try {
    const { stdout, stderr } = await execPromise('ls "./test folder"');
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
  const process = exec('grep history', { signal }, (error) => {
    console.log(`grep ssh error:${error}`); // AbortError
  });
  setTimeout(() => {
    controller.abort();
  }, 1000);
};

abortExample();
