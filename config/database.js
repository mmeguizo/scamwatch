
const key = require('dotenv').config()
const crypto = require('crypto');


const hash = crypto.createHmac('sha256', 'MEGUIZO').update('meguizo_starter').digest('hex');

module.exports = {
    // using localhost
   //uri: 'mongodb://localhost:27017/scamwatch',
   uri: 'mongodb+srv://meguizo:qAFOCPuo8vclyKjT@cluster0.bxhyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // if deployed online
    //uri: process.env.DB_HOST,
    secret: hash,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
}
