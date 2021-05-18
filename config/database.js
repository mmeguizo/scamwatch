
const key = require('dotenv').config()
const crypto = require('crypto');


const hash = crypto.createHmac('sha256', 'MEGUIZO').update('meguizo_starter').digest('hex');

module.exports = {
    // using localhost
   //uri: 'mongodb://localhost:27017/scamwatch',
   uri: 'mongodb://meguizo:qAFOCPuo8vclyKjT@cluster0-shard-00-00.bxhyy.mongodb.net:27017,cluster0-shard-00-01.bxhyy.mongodb.net:27017,cluster0-shard-00-02.bxhyy.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zah4qr-shard-0&authSource=admin&retryWrites=true&w=majority',
    // if deployed online
    // uri: process.env.DB_HOST,
    secret: hash,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
}
