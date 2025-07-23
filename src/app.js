import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, shyam');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/products', (req, res) => {
  
  const products = fs.readFileSync('./src/data/products.json', 'utf-8');
  const productsData = JSON.parse(products);
  res.send(productsData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.....');
});