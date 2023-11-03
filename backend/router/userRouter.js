const express=require('express');
const { signUp, login, getStudent } = require('../controller/user');
const { auth, isOperator, isAdmin, isAuthenticate } = require('../controller/auth');
const { markAttendece, enrollStudent, getStudentByClass } = require('../controller/attendence');
const { createClass } = require('../controller/class');
const { createEvent } = require('../controller/events');

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
router.post("/getStudentByClass",auth,isAuthenticate,getStudentByClass);

router.post("/cloudUpload",auth,isAuthenticate,createEvent);

module.exports=router;