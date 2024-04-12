require("dotenv").config();
const express = require("express");
const router = require("./route/router");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
// connect the database
const Userdata = require("./models/model")
const connectDb = require("./db/conn");

// console.log(path.join(__dirname, "../public"));
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse url encoded data

app.use("/", router);
app.use(express.static(publicPath)); // set the static files
app.set("view engine", "hbs");          //set view engine i.e hbs
app.set("views", viewsPath);            //set the views directory
hbs.registerPartials(partialsPath);     //set the partials directory

// listen the server
connectDb().then(() => {
    app.listen(port, () => console.log(`Your server is listened on port no. ${port}`));
})
