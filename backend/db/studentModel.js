const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  parentDetails: {
    fatherName: String,
    motherName: String,
    contactDetails: String,
  },
  schoolDetails: {
    schoolName: String,
    schoolAddress: String,
  },
  educationDetails: {
    grade: String,
    marks: String,
    classTeacher: String,
  },
  familyDetails: {
    siblings : String,
    siblingsNames : String
  },
  documentDetails: {
    aadharCard: Boolean,
    panCard: Boolean,
    bankAccount: Boolean,
    casteCertificate: Boolean,
    incomeCertificate: Boolean,
  },
  incomeDetails: {
    motherIncome:String,
    fatherIncome : String,
  },
  previousYearEducation: [
    {
      grade: String,
      marks: String,
      classTeacher: String,
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
