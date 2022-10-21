const count = process.argv.length > 2 ? process.argv[2] : 1000;
for (let i = 0; i < count; i++) {
  process.stderr.write('0');
}
