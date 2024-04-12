const express = require("express");
const { getData,postData } = require("../controllers/controller");
const router = express.Router();

// another way 
router.route("/").get(getData).post(postData);

// export router
module.exports = router;