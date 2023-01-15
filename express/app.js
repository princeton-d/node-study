import express from 'express';
const app = express();

app.get('/web/:id', (req, res, next) => {
  res.status(201).json({ name: 'donghyun', firstName: 'kim', id: req.params.id })
});
app.listen(8080)