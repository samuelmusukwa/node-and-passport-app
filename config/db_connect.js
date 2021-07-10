// Imported modules
const mongoose = require('mongoose');
const obj = require('./keys');

async function db_connect(){
    try {
        const con = await mongoose.connect(obj.db_url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`Database connection successful`);
    } catch (error) {
        console.log({error_message: error});
    }
}

module.exports = db_connect;