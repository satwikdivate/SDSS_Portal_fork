const express=require('express');
const { signUp, login, getStudent } = require('../controller/user');
const { auth, isOperator, isAdmin, isAuthenticate } = require('../controller/auth');
const { markAttendece, enrollStudent } = require('../controller/attendence');
const { createClass } = require('../controller/class');

const router=express.Router();

// 
router.post("/signUp",signUp);
router.post("/login",login);
router.post("/auth",auth)

router.post("/getStudent",auth,getStudent)

// ROutes for operator and admin
router.post("/markAttendece",auth,isAuthenticate ,markAttendece)
router.post("/createClass",auth,isAuthenticate,createClass)

// isStudent not added because Operator also a studnet
router.post("/enrollStudent",auth,enrollStudent)

module.exports=router;