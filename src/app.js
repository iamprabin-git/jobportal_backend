import express from 'express';
import productRoute from './routes/productRoute.js';
import config from './config/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    port: config.port, 
    name: config.name,
    version: config.version,
  });
});

app.use("/products", productRoute);


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.....`);
});