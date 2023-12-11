const express=require('express');
const { signUp, login, getStudent, getAllStudents, getAllOperators, getUserById } = require('../controller/user');
const { auth, isOperator, isAdmin, isAuthenticate } = require('../controller/auth');
const { markAttendece, enrollStudent} = require('../controller/attendence');
const { createClass, getStudentByClass, getAllClass, deleteClass, getClassById } = require('../controller/class');
const { createEvent, getAllEvents, deleteCloudEvent } = require('../controller/events');
const { aproveRequest, getAllRequest, getPendingRequest, getApproveRequest } = require('../controller/requestAccept');
const { createReport, deleteEvent, updateReport } = require('../controller/reports');

const router=express.Router();

// 
router.post("/signUp",signUp);
router.post("/login",login);
router.post("/auth",auth)
router.post("/getUserById",auth,getUserById)

router.post("/getStudent",auth,getStudent)
router.post("/getAllStudents",auth,isAuthenticate,getAllStudents)
router.post("/getAllOperators",auth,isAuthenticate,getAllOperators)

// ROutes for operator and admin
router.post("/markAttendece",auth,isAuthenticate ,markAttendece)
router.post("/createClass",auth,isAuthenticate,createClass)

// isStudent not added because Operator also a studnet
router.post("/enrollStudent",auth,enrollStudent)
router.post("/getStudentByClass",auth,isAuthenticate,getStudentByClass);
router.post("/getAllClass",auth,getAllClass)
router.post("/deleteClass",auth,isAuthenticate,deleteClass)
router.post("/classById",auth,isAuthenticate,getClassById)

router.post("/approveRequest",auth,isAdmin,aproveRequest)
router.post("/getAllRequest",auth,isAdmin,getAllRequest)
router.post("/getPendingRequest",auth,isAdmin,getPendingRequest);
router.post("/getApproveRequest",auth,isAdmin,getApproveRequest);
router.post("/createReport",auth,isAuthenticate,createReport)
router.post("/deleteReport",auth,isAuthenticate,deleteCloudEvent)


router.post("/createEvent",auth,isAuthenticate,createEvent)
router.post("/updteEvent",auth,isAuthenticate,updateReport)
router.post("/deleteEvent",auth,isAuthenticate,deleteEvent)

router.post("/getAllReportsRequest",auth,getAllEvents)

router.post("/cloudUpload",auth,isAuthenticate,createEvent);

module.exports=router;