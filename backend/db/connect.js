const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.MONGO_URI;

const start = async () => {
    try {
        mongoose
            .connect(DB, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
            .then(() => console.log('Connected to MongoDb Successfully!'));
    } catch (error) {
        console.log(error);
    }
};

start();
