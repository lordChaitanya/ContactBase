const express = require("express");
const router = express.Router();
const {getContacts,createContact,getContact,deleteContact,UpdateContact} = require("../controllers/contactController")


//1
router.route("/").get(getContacts);

//2
router.route("/:id").get(getContact);

//3
router.route("/").post(createContact);


//4
router.route("/:id").put(UpdateContact);

//5
router.route("/:id").delete(deleteContact);




module.exports = router;