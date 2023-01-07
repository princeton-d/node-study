// import { sound } from "./sound.json";

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.listen(8080, function () { // 8080 포트로 서버를 열어달라는 뜻
  console.log('listening on 8080')
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/pet', function (req, res) {
  res.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', (req, res) => {
  res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/dog', (req, res) => { // 객체를 전달할 수도 있다.
  res.json({ sound: '멍멍!!' })
})

app.get('/user/:id', (req, res) => {
  // const q = req.params
  const q = req.query
  console.log(q)
  res.send(q.firstname)
})

const sound = {
  dog: '멍멍',
  cat: '야옹',
}

app.get('/sound/:name', (req, res) => {
  q = req.params
  console.log(q)
  res.send(q)
})