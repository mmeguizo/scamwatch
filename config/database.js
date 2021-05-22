
const key = require('dotenv').config()
const crypto = require('crypto');


const hash = crypto.createHmac('sha256', process.env.SECRET).update('meguizo_starter').digest('hex');

module.exports = {
    // using localhost
   uri: 'mongodb://localhost:27017/scamwatch',
    // if deployed online
    // uri: process.env.DB_HOST,
    secret: hash,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
}
