const fs = require('fs');

try {
  const data = fs.readFileSync('hi.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log('Log from outside');
