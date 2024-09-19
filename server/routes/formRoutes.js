const express=require("express");
const router=express.Router();
// const {submitForm}=require("../controller/formController");
const{createContact}=require('../controller/mongoController');


router.post("/form",createContact);
// router.post("/formPost",submitForm);

module.exports=router;