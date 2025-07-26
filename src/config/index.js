import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    name: process.env.APP_NAME || 'JobPortal Backend',
    version: process.env.APP_VERSION || '0.1.0',
    env: process.env.NODE_ENV || 'development',
    mongoUrl: process.env.MONGO_URL,
    dbName: process.env.DB_NAME || 'jobportal'
};