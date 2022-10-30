const { unlink } = require('fs');

unlink('hi.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted!');
});
