import dotenv from 'dotenv';
dotenv.config();
const config={
    port: process.env.PORT || 3000,
    name: process.env.NAME || 'Default Name',
    version: process.env.VERSION || '1.0.0',
}

export default config;
