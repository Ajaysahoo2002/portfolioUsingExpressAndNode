const Userdata = require("../models/model");
const getData = async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        console.log(`Your error : ${error}`);
    }
}
const postData = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const message = req.body.message;
       
        const dataExits = await Userdata.findOne({ email });
        if (dataExits) {
            res.status(400).send("You have already posted your message");
        }
        else {
            const saveData = await Userdata.insertMany({ name, email, phone, message });
            res.status(201).send(saveData);
            console.log(saveData);
        }


    } catch (error) {
        res.status(500).send(`Your error : ${error}`);
        console.log(`Your error : ${error}`);
    }
}



// exports the functions
module.exports = { getData, postData }