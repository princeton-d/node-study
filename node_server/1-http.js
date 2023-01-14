const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { // 서버 만들기
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./html/index.html').pipe(res);
    console.log(res)
  } else if (url === '/courses') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./html/notFound.html').pipe(res);
  }
});

server.listen(8080);