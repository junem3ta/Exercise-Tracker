const mongoose = require('mongoose'),
db = process.env.ETMongoURI,

connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true
        });

        console.log('MongoDB Connection Successful!');
    } catch (err) {
        console.log(err);
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;