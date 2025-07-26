import express from 'express';
import productRoute from './routes/productRoute.js';
import config from './config/index.js';
import bodyParser from 'body-parser';
import mongoConnect from './utils/database.js';

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

mongoConnect((err, client) => {
  if (err) {
    console.error("Error connecting to database", err);
  } else {
    console.log("Connected to database");
  }
});
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.....`);
});