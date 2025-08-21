import express from 'express';
import dotenv from "dotenv";
import authRoute from './routes/authRoute.js';
import jobRoute from './routes/jobRoute.js';
import config from './config/index.js';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';

dotenv.config();
const app = express();

connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    port: config.port,  
    name: config.name,
    version: config.version,
    status: 'ok',
  });
});

app.use("/api/auth", authRoute);
app.use("/api/jobs", jobRoute);


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.....`);
});