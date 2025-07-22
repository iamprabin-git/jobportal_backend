import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, shyam');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.....');
});