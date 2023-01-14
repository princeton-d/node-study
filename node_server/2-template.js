const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Websteak';
const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }, { name: 'NODE' }, { name: 'Frontend' }]

const server = http.createServer((req, res) => { // 서버 만들기
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  if (url === '/') {
    ejs.renderFile('./template/index.ejs', { name }).then(data => res.end(data));
  } else if (url === '/courses') {
    ejs.renderFile('./template/courses.ejs', { courses }).then(data => res.end(data));
  } else {
    ejs.renderFile('./template/notFound.ejs', { name }).then(data => res.end(data));
  }
});

server.listen(8080);