const express=require('express');
const { signUp, login, getStudent, getAllStudents, getAllOperators, getUserById } = require('../controller/user');
const { auth, isOperator, isAdmin, isAuthenticate } = require('../controller/auth');
const { markAttendece, enrollStudent} = require('../controller/attendence');
const { createClass, getStudentByClass, getAllClass, deleteClass } = require('../controller/class');
const { createEvent } = require('../controller/events');
const { aproveRequest, getAllRequest } = require('../controller/requestAccept');

const router=express.Router();

// 
router.post("/signUp",signUp);
router.post("/login",login);
router.post("/auth",auth)
router.post("/getUserById",auth,isAuthenticate,getUserById)

router.post("/getStudent",auth,getStudent)
router.post("/getAllStudents",auth,isAuthenticate,getAllStudents)
router.post("/getAllOperators",auth,isAuthenticate,getAllOperators)

// ROutes for operator and admin
router.post("/markAttendece",auth,isAuthenticate ,markAttendece)
router.post("/createClass",auth,isAuthenticate,createClass)

// isStudent not added because Operator also a studnet
router.post("/enrollStudent",auth,enrollStudent)
router.post("/getStudentByClass",auth,isAuthenticate,getStudentByClass);
router.post("/getAllClass",auth,isAuthenticate,getAllClass)
router.post("/deleteClass",auth,isAuthenticate,deleteClass)
router.post("/approveRequest",auth,isAdmin,aproveRequest)
router.post("/getAllRequest",auth,isAdmin,getAllRequest)
router.post("/createEvent",auth,isAuthenticate,createEvent)

router.post("/cloudUpload",auth,isAuthenticate,createEvent);

module.exports=router;