const mongoose = require('mongoose');

require("dotenv").config();

const DATABASE_URL = process.env.DB_URL;

const connect = ()=>{
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    });
}

module.exports = connect;