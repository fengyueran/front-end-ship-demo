const { fork } = require('child_process');

//例1:
//不会打印message from child
const child1 = fork('./child.js', {
  silent: true,
});

//例2:
//打印出message from child
const child2 = fork('./child.js', {
  silent: true,
});
child2.stdout.on('data', function (data) {
  console.log('child2 on data', data.toString());
});

//例3:
//打印出message from child
fork('./child.js', {
  silent: false,
});
