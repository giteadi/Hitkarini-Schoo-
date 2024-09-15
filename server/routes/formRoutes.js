const express=require("express");
const router=express.Router();
const {submitForm}=require("../controller/formController");

router.post("/formPost",submitForm);

module.exports=router;