const mongoose = require("mongoose");
const url = process.env.URL;
// mongoose.connect(url)
//     .then(() => console.log("Your Database connected successfully"))
//     .catch((error) => console.log(`Your error : ${error}`));

const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("Your Database connected successfully");
    } catch (error) {
        console.log(`Your error : ${error}`)
    }
}

module.exports = connectDb;