const express=require('express');
const { signUp, login } = require('../controller/user');
const { auth } = require('../controller/auth');

const router=express.Router();

router.post("/signUp",signUp);
router.post("/login",login);
router.post("/auth",auth)

module.exports=router;