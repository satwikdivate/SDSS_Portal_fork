const express=require('express');
const { createPersonalProfile } = require('../controller/personalProfile');
const {auth}=require("../controller/auth")
const router=express.Router();


router.post("/createPerProfile",auth,createPersonalProfile);
module.exports=router;