import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const PORT=process.env.PORT || 3000;
const NAME=process.env.NAME;
const VERSION=process.env.VERSION;

const app = express();

app.get('/', (req, res) => {
  res.json({
    port: PORT, 
    name: NAME,
    version: VERSION,
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/products', (req, res) => {
  
  const products = fs.readFileSync('./src/data/products.json', 'utf-8');
  const productsData = JSON.parse(products);
  res.send(productsData);
});
app.post('/products', (req, res) => {
  res.send('Product added successfully');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}.....`);
});