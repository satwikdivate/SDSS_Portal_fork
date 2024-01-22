import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./FillProfile.css";
import { getUser } from "../../Services/auth";
import { useDispatch } from "react-redux";
import {
  updatePersonalProfile,
  updateAcProfile,
  updateFamilyProfile,
} from "../../Services/profile";
// import Footer from '../../components/Footer/Footer';
const FillProfile = () => {
  const [currentSection, setCurrentSection] = useState("personal");
  const [showPopup, setShowPopup] = useState(false);
  const [relationships, setRelationships] = useState([]);
  const [data, setdata] = useState();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const result1 = await dispatch(getUser());

      console.log(result1.firstName);

      setdata(result1);
      // setUserData(result1)
    } catch (e) {
      console.log("ERROR AT FRONTED:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Data:", data);

  const [newRelationship, setNewRelationship] = useState({
    name: "",
    relation: "",
    dob: "",
  });

  const [personalData, setPersonalData] = useState({
    address: "",
    age: "",
    dob: "",
    email: data?.email,
    firstName: data?.firstName,
    lastName: data?.lastName,
    phone: data?.contact,
    standard: "",
  });

  const [educational, setEducationalData] = useState({
    schoolName: "",
    schoolAddress: "",
    medium: "",
    classTeacher: "",
  });

  const [familyData, setFamilyData] = useState({
    fatherName: "",
    motherName: "",
    contact: "",
    occupation: "",
    income: "",
    siblingCount: "",
  });

  const [userData, setUserData] = useState({
    personal: { ...personalData },
    educational: { ...educational },
    family: { ...familyData },
    relationships: [],
  });

  const changeSection = (section) => {
    setCurrentSection(section);
  };


  const submitPersonalUpdate = async () => {
    console.log(personalData);
    await updatePersonalProfile(personalData);
  };

  const submitAcademicUpdate = async () => {
    console.log(educational);
    dispatch(
        updateAcProfile(
          educational.schoolName,
          educational.schoolAddress,
          educational.classTeacher,
          educational.medium
        )
      );
    
  };

  const submitfamilyUpdate = async () => {
    console.log(familyData);
    dispatch(
        updateFamilyProfile(
          familyData.fatherName,
          familyData.income,
          familyData.contact,
          familyData.motherName,
          familyData.occupation,
          familyData.siblingCount
        )
      );
  };

  return (
    <div className="fill-profile">
      <Header />
      <div className="all">
        <div className="profile-sidebar">
          <div className="profile-edit">
            <button onClick={() => changeSection("personal")}>
              Personal Profile
            </button>
            <button onClick={() => changeSection("educational")}>
              Educational Profile
            </button>
            <button onClick={() => changeSection("family")}>
              Family Profile
            </button>
          </div>
        </div>

        <div className="profile">
          {currentSection === "personal" && (
            <div className="section-pp">
              <div className="heading">
                <h1>Personal Profile</h1>
                <p>Fill your personal profile</p>
              </div>
              <div className="form-pp">
                <label className="first-name">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    value={personalData.firstName || data?.firstName}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        firstName: e.target.value,
                      })
                    }
                    defaultValue={data?.firstName}
                  />
                  <p>{data?.familyProfile?.email}</p>
                </label>
                <label className="last-name">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={personalData?.lastName || data?.lastName}
                    defaultValue={data?.lastName}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        lastName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="email">
                  Email
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={personalData.email || data?.email}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="phone">
                  Phone
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={personalData.phone || data?.contact}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        phone: e.target.value,
                      })
                    }
                    defaultValue={data?.contact}
                  />
                </label>
                <label className="dob">
                  Date of Birth
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    name="dob"
                    value={
                      personalData.dob || data?.personalProfile.dateOfBirth
                    }
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        dob: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="age">
                  Age
                  <input
                    type="number"
                    placeholder="Age"
                    min="11"
                    max="22"
                    name="age"
                    value={personalData.age || data?.personalProfile.age}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        age: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <label className="address">
                Address
                <textarea
                  placeholder="Address"
                  name="address"
                  value={personalData.address}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      address: e.target.value,
                    })
                  }
                />
              </label>
              <label className="standard">
                Choose Standard
                <div className="standard-fixed">
                  <input
                    type="number"
                    placeholder="Standard"
                    min="5"
                    max="16"
                    name="standard"
                    value={personalData.standard || data?.personalProfile.grade}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        standard: e.target.value,
                      })
                    }
                  />
                </div>
              </label>
              <button className="update-profile" onClick={submitPersonalUpdate}>
                Update Profile
              </button>
            </div>
          )}

          {currentSection === "educational" && (
            <div className="section-ep">
              <div className="heading">
                <h1>Educational Profile</h1>
                <p>Fill your educational profile</p>
              </div>
              <div className="form-pp">
                <label className="school-name">
                  School Name
                  <input
                    type="text"
                    placeholder="School Name"
                    name="schoolName"
                    value={educational.schoolName}
                    onChange={(e) =>
                      setEducationalData({
                        ...educational,
                        schoolName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="school-address">
                  Your School Address
                  <input
                    type="text"
                    placeholder="School Address"
                    name="schoolAddress"
                    value={educational.schoolAddress}
                    onChange={(e) =>
                      setEducationalData({
                        ...educational,
                        schoolAddress: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="Medium">
                  Choose Medium
                  <div className="medium-fixed">
                    <label>
                      <input
                        type="radio"
                        name="medium"
                        value="English"
                        checked={educational.medium === "English"}
                        onChange={(e) =>
                          setEducationalData({
                            ...educational,
                            medium: e.target.value,
                          })
                        }
                      />
                      English
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="medium"
                        value="Semi-English"
                        checked={educational.medium === "Semi-English"}
                        onChange={(e) =>
                          setEducationalData({
                            ...educational,
                            medium: e.target.value,
                          })
                        }
                      />
                      Semi-English
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="medium"
                        value="Marathi"
                        checked={educational.medium === "Marathi"}
                        onChange={(e) =>
                          setEducationalData({
                            ...educational,
                            medium: e.target.value,
                          })
                        }
                      />
                      Marathi
                    </label>
                  </div>
                </label>
                <label className="class-teacher">
                  Your Class Teacher Name
                  <input
                    type="text"
                    placeholder="Class Teacher"
                    name="classTeacher"
                    value={educational.classTeacher}
                    onChange={(e) =>
                      setEducationalData({
                        ...educational,
                        classTeacher: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <button
                className="update-academic"
                onClick={submitAcademicUpdate}
              >
                Update Profile
              </button>
            </div>
          )}

          {currentSection === "family" && (
            <div className="section-fp">
              <div className="heading">
                <h1>Family Profile</h1>
                <p>Fill your family profile</p>
              </div>
              <div className="form-fp">
                <label className="father-name">
                  Father's Full Name
                  <input
                    type="text"
                    placeholder="Father's Name"
                    name="fatherName"
                    value={familyData.fatherName}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        fatherName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="mother-name">
                  Mother's Full Name
                  <input
                    type="text"
                    placeholder="Mother's Name"
                    name="motherName"
                    value={familyData.motherName}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        motherName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="fcontact">
                  Father's Contact No.
                  <input
                    type="number"
                    placeholder="Father's Contact No."
                    name="fatherContact"
                    value={familyData.contact}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        contact: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="occu">
                  Occupation
                  <input
                    type="text"
                    placeholder="Father's Occupation"
                    name="occupation"
                    value={familyData.occupation}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        occupation: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="income">
                  Annual Income
                  <input
                    type="text"
                    placeholder="Annual Income"
                    name="income"
                    value={familyData.income}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        income: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="sibling-count">
                  Number of Siblings
                  <input
                    type="number"
                    placeholder="Number of Siblings"
                    name="siblingCount"
                    value={familyData.siblingCount}
                    onChange={(e) =>
                      setFamilyData({
                        ...familyData,
                        siblingCount: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <button className="update-profile" onClick={submitfamilyUpdate}>
                Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FillProfile;
