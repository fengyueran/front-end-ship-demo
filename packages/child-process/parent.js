const { fork } = require('child_process');

//打印出message from child
fork('./child.js', {
  silent: false,
});

//不会打印message from child
const child = fork('./child.js', {
  silent: true,
});

child.stdout.on('data', function (data) {
  //打印出message from child
  console.log(data.toString());
});

child.on('message', function (message) {
  console.log(`Receive message from child: ${JSON.stringify(message)}`);
});

child.send({ from: 'parent' });
