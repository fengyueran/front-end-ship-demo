console.log('message from child');

process.on('message', function (message) {
  console.log(`Receive message from parent: ${JSON.stringify(message)}`);
});

process.send({ from: 'child' });
console.log(process.argv0);
