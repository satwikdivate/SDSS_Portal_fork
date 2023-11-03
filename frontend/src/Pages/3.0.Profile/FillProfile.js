import React, { useState } from 'react';
import Header from '../../components/Header/Header';


const FillProfile = () => {
    const [currentSection, setCurrentSection] = useState('personal');
    const [showPopup, setShowPopup] = useState(false);
    const [relationships, setRelationships] = useState([]);
    const [newRelationship, setNewRelationship] = useState({
        name: '',
        relation: '',
        dob: '',
    });

    const personalData = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        phone: '',
        dob: '',
        address: '',
        standard: '',
    };

    const educationalData = {
        schoolName: '',
        schoolAddress: '',
        medium: '',
        classTeacher: '',
    };

    const familyData = {
        fatherName: '',
        motherName: '',
        fatherContact: '',
        motherContact: '',
        occupation: '',
        income: '',
        siblingCount: '',
    };

    const [userData, setUserData] = useState({
        personal: { ...personalData },
        educational: { ...educationalData },
        family: { ...familyData },
        relationships: [],
    });

    const changeSection = (section) => {
        setCurrentSection(section);
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const addRelationship = () => {
        setRelationships([...relationships, newRelationship]);
        setNewRelationship({ name: '', relation: '', dob: '' });
    };

    const goToNextSection = () => {
        if (currentSection === 'personal') {
            setUserData({ ...userData, personal: personalData });
            setCurrentSection('educational');
        } else if (currentSection === 'educational') {
            setUserData({ ...userData, educational: educationalData });
            setCurrentSection('family');
        }
    };

const submitData = () => {
    if (currentSection === 'family') {
        const completeUserData = {
            personal: { ...userData.personal },
            educational: { ...userData.educational },
            family: { ...userData.family },
            relationships: [...relationships],
        };

        setUserData({ ...userData, relationships: [...relationships] });
        console.log("User data:",userData)
        console.log("Personal Data:",personalData);
        console.log("Educational Data:",educationalData);
        console.log("Family Data:",educationalData)
        const userDataJSON = JSON.stringify(userData);

        // fetch('/saveUserData', {
        //     method: 'POST',
        //     body: userDataJSON,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Data saved:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error saving data:', error);
        //     });
    };

    const goToPreviousSection = () => {
        if (currentSection === 'educational') {
            setCurrentSection('personal');
        } else if (currentSection === 'family') {
            setCurrentSection('educational');
        }
    };

    return (
        <div className='fill-profile'>
            {/* <Header /> */}
            <div className='all'>
                <div className="profile-sidebar">
                    <div className="profile-info">
                        <div className="profile-image">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="profile-details">
                            Name: {userData.personal.firstName} {userData.personal.lastName} <br />
                            Email: {userData.personal.email} <br />
                            Phone: {userData.personal.phone} <br />
                            Date of Birth: {userData.personal.dob} <br />
                            Age: {userData.personal.age} <br />
                            Address: {userData.personal.address} <br />
                            Grade: {userData.personal.standard}
                        </div>
                    </div>
                    <div className="profile-edit">
                        <button onClick={() => changeSection('personal')}>Personal Profile</button>
                        <button onClick={() => changeSection('educational')}>Educational Profile</button>
                        <button onClick={() => changeSection('family')}>Family Profile</button>
                    </div>
                </div>

                <div className="profile">
                    {currentSection === 'personal' && (
                        <div className="section-pp">
                            <div className="heading">
                                <h1>Personal Profile</h1>
                                <p>Fill your personal profile</p>
                            </div>
                            <div className="form-pp">
                                <label className='first-name'>
                                    First Name
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name='firstName'
                                        value={userData.personal.firstName}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    firstName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='last-name'>
                                    Last Name
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={userData.personal.lastName}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    lastName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='email'>
                                    Email
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name='email'
                                        value={userData.personal.email}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    email: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='phone' >
                                    Phone
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        name='phone'
                                        value={userData.personal.phone}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    phone: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='dob'>
                                    Date of Birth
                                    <input
                                        type="date"
                                        placeholder="Date of Birth"
                                        name='dob'
                                        value={userData.personal.dob}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    dob: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='age'>
                                    Age
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        min="11"
                                        max="22"
                                        name='age'
                                        value={userData.personal.age}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    age: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <label className='address'>
                                Address
                                <textarea
                                    placeholder="Address"
                                    name='address'
                                    value={userData.personal.address}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            personal: {
                                                ...userData.personal,
                                                address: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </label>
                            <label className='standard'>
                                Choose Standard
                                <div className="standard-fixed">
                                    <input
                                        type="number"
                                        placeholder="Standar"
                                        min="5"
                                        max="16"
                                        name='age'
                                        value={userData.personal.standard}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                personal: {
                                                    ...userData.personal,
                                                    standard: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </label>
                        </div>
                    )}

                    {currentSection === 'educational' && (
                        <div className="section-ep">
                            <div className="heading">
                                <h1>Educational Profile</h1>
                                <p>Fill your educational profile</p>
                            </div>
                            <div className="form-pp">
                                <label className='school-name'>
                                    School Name
                                    <input
                                        type="text"
                                        placeholder="School Name"
                                        name='schoolName'
                                        value={userData.educational.schoolName}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                educational: {
                                                    ...userData.educational,
                                                    schoolName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='school-address'>
                                    Your School Address
                                    <input
                                        type="text"
                                        placeholder="School Address"
                                        name='schoolAddress'
                                        value={userData.educational.schoolAddress}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                educational: {
                                                    ...userData.educational,
                                                    schoolAddress: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='Medium'>
                                    Choose Medium
                                    <div className="medium-fixed">
                                        <label>
                                            <input
                                                type="radio"
                                                name="medium"
                                                value="English"
                                                checked={userData.educational.medium === 'English'}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        educational: {
                                                            ...userData.educational,
                                                            medium: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                            English
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="medium"
                                                value="Mathematics"
                                                checked={userData.educational.medium === 'Semi-English'}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        educational: {
                                                            ...userData.educational,
                                                            medium: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                            Semi-English
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="medium"
                                                value="Science"
                                                checked={userData.educational.medium === 'Marathi'}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        educational: {
                                                            ...userData.educational,
                                                            medium: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                            Marathi
                                        </label>
                                    </div>

                                </label>
                                <label className='class-teacher'>
                                    Your Class Teacher Name
                                    <input
                                        type="text"
                                        placeholder="Class Teacher"
                                        name='classTeacher'
                                        value={userData.educational.classTeacher}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                educational: {
                                                    ...userData.educational,
                                                    classTeacher: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                            </div>
                        </div>
                    )}

                    {currentSection === 'family' && (
                        <div className='section-fp'>
                            <div className="heading">
                                <h1>Family Profile</h1>
                                <p>Fill your family profile</p>
                            </div>
                            <div className="form-fp">
                                <label className='father-name'>
                                    Father's Full Name
                                    <input
                                        type="text"
                                        placeholder="Father's Name"
                                        name="fatherName"
                                        value={userData.family.fatherName}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    fatherName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='mother-name'>
                                    Mother's Full Name
                                    <input
                                        type="text"
                                        placeholder="Mother's Name"
                                        name="motherName"
                                        value={userData.family.motherName}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    motherName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='fcontact'>
                                    Father's Contact No.
                                    <input
                                        type='number'
                                        placeholder="Father's Contact No."
                                        name="fatherContact"
                                        value={userData.family.fatherContact}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    fatherContact: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='mcontact'>
                                    Mother's Contact No.
                                    <input
                                        type='number'
                                        placeholder="Mother's Contact No."
                                        name="motherContact"
                                        value={userData.family.motherContact}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    motherContact: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='occu'>
                                    Occupation
                                    <input
                                        type='text'
                                        placeholder="Father's Occupation"
                                        name="occupation"
                                        value={userData.family.occupation}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    occupation: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='income'>
                                    Annual Income
                                    <input
                                        type='text'
                                        placeholder="Annual Income"
                                        name="income"
                                        value={userData.family.income}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    income: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                                <label className='sibling-count'>
                                    Number of Siblings
                                    <input
                                        type='number'
                                        placeholder="Number of Siblings"
                                        name="siblingCount"
                                        value={userData.family.siblingCount}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                family: {
                                                    ...userData.family,
                                                    siblingCount: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <button className='add-data-btn' onClick={openPopup}>Add Data</button>
                            {showPopup && (
                                <div className="popup">
                                    <h2>Add Family Data</h2>
                                    <div className="relationships">
                                        <label className='rname'>
                                            Name:
                                            <input
                                                type='text'
                                                placeholder="Name"
                                                name="rName"
                                                value={newRelationship.name}
                                                onChange={(e) =>
                                                    setNewRelationship({
                                                        ...newRelationship,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        </label>
                                        <label className='Relation'>
                                            Relation with You:
                                            <input
                                                type='text'
                                                placeholder="Relation"
                                                name="Relation"
                                                value={newRelationship.relation}
                                                onChange={(e) =>
                                                    setNewRelationship({
                                                        ...newRelationship,
                                                        relation: e.target.value,
                                                    })
                                                }
                                            />
                                        </label>
                                        <label className='dob'>
                                            Date of Birth:
                                            <input
                                                type='date'
                                                placeholder="Date"
                                                name="DOB"
                                                value={newRelationship.dob}
                                                onChange={(e) =>
                                                    setNewRelationship({
                                                        ...newRelationship,
                                                        dob: e.target.value,
                                                    })
                                                }
                                            />
                                        </label>
                                    </div>
                                    <button className='tab-save' onClick={addRelationship}>Save</button>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Relation with You</th>
                                                <th>Date of Birth</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {relationships.map((relationship, index) => (
                                                <tr key={index}>
                                                    <td>{relationship.name}</td>
                                                    <td>{relationship.relation}</td>
                                                    <td>{relationship.dob}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button className='close-btn' onClick={closePopup}>
                                        X
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="buttons">
                        {currentSection !== 'personal' && (
                            <button onClick={goToPreviousSection}>Back</button>
                        )}
                        {currentSection !== 'family' && (
                            <button onClick={goToNextSection}>Next</button>
                        )}
                        {currentSection === 'family' && (
                            <button onClick={submitData}>Submit</button>
                        )}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
}
export default FillProfile;
