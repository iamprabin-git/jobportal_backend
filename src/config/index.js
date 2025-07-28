import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    name: process.env.APP_NAME || 'JobPortal Backend',
    version: process.env.APP_VERSION || '0.1.0',
    mongoUrl: process.env.MONGO_URL || "mongodb+srv://dprabin23:mmMUq9UZKvHJzAJV@clusterjobportal.iey2qiz.mongodb.net/jobportal-backend?retryWrites=true&w=majority&appName=ClusterJobportal",
    
};