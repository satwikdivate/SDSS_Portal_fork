const mongoose = require('mongoose');
const Student = require('./studentModel');

const mongoURI = 'mongodb://localhost:27017/studentbio';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  const sampleData = [
    {
      "studentName": "John Doe",
      "address": "123 Main St, City, Country",
      "parentDetails": {
        "fatherName": "Mike Doe",
        "motherName": "Jane Doe",
        "contactDetails": "mike.doe@email.com, jane.doe@email.com"
      },
      "schoolDetails": {
        "schoolName": "ABC High School",
        "schoolAddress": "456 Elm St, City, Country"
      },
      "educationDetails": {
        "grade": "10th",
        "marks": "95%",
        "classTeacher": "Mrs. Smith"
      },
      "familyDetails": {
        "siblings": 2,
        "siblingsNames": "Alice Doe, Bob Doe"
      },
      "documentDetails": {
        "aadharCard": true,
        "panCard": true,
        "bankAccount": false,
        "casteCertificate": false,
        "incomeCertificate": true
      },
      "incomeDetails": {
        "fatherIncome": "50000 USD",
        "motherIncome": "45000 USD"
      },
      "previousYearEducation": [
        {
          "grade": "9th",
          "marks": "92%",
          "classTeacher": "Mr. Johnson"
        },
        {
          "grade": "8th",
          "marks": "88%",
          "classTeacher": "Miss White"
        }
      ]
    },
    {
      "studentName": "Jane Smith",
      "address": "789 Oak St, City, Country",
      "parentDetails": {
        "fatherName": "David Smith",
        "motherName": "Laura Smith",
        "contactDetails": "david.smith@email.com, laura.smith@email.com"
      },
      "schoolDetails": {
        "schoolName": "XYZ High School",
        "schoolAddress": "101 Pine St, City, Country"
      },
      "educationDetails": {
        "grade": "11th",
        "marks": "89%",
        "classTeacher": "Mr. Brown"
      },
      "familyDetails": {
        "siblings": 1,
        "siblingsNames": "Emma Smith"
      },
      "documentDetails": {
        "aadharCard": true,
        "panCard": false,
        "bankAccount": false,
        "casteCertificate": true,
        "incomeCertificate": false
      },
      "incomeDetails": {
        "fatherIncome": "55000 USD",
        "motherIncome": "48000 USD"
      },
      "previousYearEducation": [
        {
          "grade": "10th",
          "marks": "91%",
          "classTeacher": "Miss Davis"
        },
        {
          "grade": "9th",
          "marks": "87%",
          "classTeacher": "Mr. Wilson"
        }
      ]
    }
  ]
  

  Student.insertMany(sampleData)
    .then((insertedData) => {
      console.log('Sample data inserted into MongoDB:', insertedData);
    })
    .catch((error) => {
      console.error('Error inserting sample data:', error);
    })
    .finally(() => {
      mongoose.connection.close();
    });
});
