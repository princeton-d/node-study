const express = require('express');
const app = express();

app.listen(8080, function () { // 8080 포트로 서버를 열어달라는 뜻
  console.log('listening on 8080')
});

app.get('/pet', function (req, rep) {
  rep.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', (req, rep) => {
  rep.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/', (req, rep) => {
  rep.sendFile(__dirname + '/index.html')
});