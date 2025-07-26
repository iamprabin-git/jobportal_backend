
import { MongoClient } from 'mongodb';

const MONGO_URL = process.config.mongoUrl;

let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(client => {
        
        callback();  // Add null as first argument for error-free success
        _db = client.db('jobportal');
    })
    .catch(err => {
        console.error("Error connecting to database", err);
        
    });
}
const getDb = () => {
    if (!_db) {
        throw "No database found";
    }
        return _db;
    
}
;
export { getDb };
export default mongoConnect;