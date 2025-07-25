import express from 'express';
import fs from 'fs';
import config from './config/index.js';




const app = express();

app.get('/', (req, res) => {
  res.json({
    port: config.port, 
    name: config.name,
    version: config.version,
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

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.....`);
});