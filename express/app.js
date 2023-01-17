import express from 'express';
const app = express();

// app.get('/web/:id', (req, res, next) => {
//   res.status(201).json({ name: 'donghyun', firstName: 'kim', id: req.params.id })
// });

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    next(new Error('error'));
  },
  (req, res, next) => {
    console.log('first2');
    next();
  }
)

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('Not available!@_@')
})

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
})
app.listen(8080)