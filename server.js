const http = require('http');
const fs = require('fs');
const { isAbsolute } = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
  res.end('<h1>Hello World</h1>');
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
