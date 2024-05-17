
const mongoose = require('mongoose');

require('dotenv').config()
//This is also fine with Export function 
// mongoose
//     .connect(connectionString)
//     .then(() => console.log("CONNECTED TO DB............."))
//     .catch((err) => console.log(err))



// In a different way 
const connectDB = async (url) => {
    try {
        await mongoose
            .connect(url);
        return console.log("CONNECTED TO DB.............");
    } catch (err) {
        return console.log(err);
    }

}

module.exports = connectDB