import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './FillProfile.css';
import Footer from '../../components/Footer/Footer';

const Fillprofile = () => {
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
        Phone: '',
        dob: '',
        address: '',
        standard: '',
    };

    const educationalData = {
        schoolName: '',
        schoolAddress: '',
        medium: '',
        ClassTeacher: '',
    };

    const familyData = {
        fatherName: '',
        motherName: '',
        fcontact: '',
        mcontact: '',
        occu: '',
        income: '',
        siblingCount: '',
    };

    const [userData, setUserData] = useState({
        personal: {},
        educational: {},
        family: {},
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
            setCurrentSection('educational');
        } else if (currentSection === 'educational') {
            setCurrentSection('family');
        }
    };

    const submitData = () => {
        if (currentSection === 'personal') {
            setUserData({ ...userData, personal: { ...personalData } });
        } else if (currentSection === 'educational') {
            setUserData({ ...userData, educational: { ...educationalData } });
        } else if (currentSection === 'family') {
            setUserData({ ...userData, family: { ...familyData } });
        }

        setUserData({ ...userData, relationships: [...relationships] });

        const userDataJSON = JSON.stringify(userData);

        fetch('/saveUserData', {
            method: 'POST',
            body: userDataJSON,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data saved:', data);
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
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
            <Header />
            <div className='all'>
                <div className="profile-sidebar">
                    <div className="profile-info">
                        <div className="profile-image">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="profile-details">
                            Name : hello world <br></br>
                            Grade : 5th grade

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
                                        name='First Name'
                                    />

                                </label>
                                <label className='last-name'>
                                    Last Name
                                    <input type="text" placeholder="Last Name" name="Last Name" />
                                </label>
                                <label className='email'>
                                    Email
                                    <input type="text" placeholder="Email" name='Email' />
                                </label>
                                <label className='phone' >
                                    Phone
                                    <input type="text" placeholder="Phone" name='Contact Number' />
                                </label>
                                <label className='dob'>
                                    Date of Birth
                                    <input type="date" placeholder="Date of Birth" name='Date of Birth' />
                                </label>
                                <label className='age'>
                                    Age
                                    <input type="number" placeholder="Age" min="11" max="22" name='Age' />
                                </label>

                            </div>
                            <label className='address'>
                                Address
                                <textarea placeholder="Address" name='Address' />
                            </label>
                            <label className='standard'>
                                Choose Standard
                                <div className="standard-fixed">
                                    <input type="radio" id="standard-5th" name="standard" />
                                    <label for="standard-5th">5th</label>
                                    <input type="radio" id="standard-6th" name="standard" />
                                    <label for="standard-6th">6th</label>
                                    <input type="radio" id="standard-7th" name="standard" />
                                    <label for="standard-7th">7th</label>
                                    <input type="radio" id="standard-8th" name="standard" />
                                    <label for="standard-8th">8th</label>
                                    <input type="radio" id="standard-9th" name="standard" />
                                    <label for="standard-9th">9th</label>
                                    <input type="radio" id="standard-10th" name="standard" />
                                    <label for="standard-10th">10th</label>
                                    <input type="radio" id="standard-11th" name="standard" />
                                    <label for="standard-11th">11th</label>
                                    <input type="radio" id="standard-12th" name="standard" />
                                    <label for="standard-12th">12th</label>
                                    <input type="radio" id="standard-first-year" name="standard" />
                                    <label for="standard-first-year">First Year</label>
                                    <input type="radio" id="standard-second-year" name="standard" />
                                    <label for="standard-second-year">Second Year</label>
                                    <input type="radio" id="standard-third-year" name="standard" />
                                    <label for="standard-third-year">Third Year</label>
                                    <input type="radio" id="standard-final-year" name="standard" />
                                    <label for="standard-final-year">Final Year / Post Graduation(FY)</label>
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
                                    <input type="text" placeholder="School Name" name='School Name' />
                                </label>
                                <label className='school-address'>
                                    Your School Address
                                    <input type="text" placeholder="School Address" name='School Address' />
                                </label>
                                <label className='Medium'>
                                    Choose Medium
                                    <div className="medium-fixed">
                                        <input type="radio" id="medium-marathi" name="medium" />
                                        <label for="medium-marathi">Marathi</label>
                                        <input type="radio" id="medium-semi" name="medium" />
                                        <label for="medium-semi">Semi - English</label>
                                        <input type="radio" id="medium-english" name="medium" />
                                        <label for="medium-english">English</label>
                                    </div>
                                </label>
                                <label className='class-teacher'>
                                    Your Class Teacher Name
                                    <input type="text" placeholder="Class Teacher" name='Class Teacher' />
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
                                    <input type="text" placeholder="Father's Name" name="Father's Name" />
                                </label>
                                <label className='mother-name'>
                                    Mother's Full Name
                                    <input type="text" placeholder="Mother's Name" name="Mother's Name" />
                                </label>
                                <label className='fcontact'>
                                    Father's Contact No.
                                    <input type='number' placeholder="Father's Contact No." name="Father's Contact No." />
                                </label>
                                <label className='fcontact'>
                                    Mother's Contact No.
                                    <input type='number' placeholder="Mother's Contact No." name="Mother's Contact No." />
                                </label>
                                <label className='occu'>
                                    Occupation
                                    <input type='text' placeholder="Father's Occupation" name="Father's Occupation" />
                                </label>
                                <label className='income'>
                                    Annual Income
                                    <input type='text' placeholder="Annual Income" name="Income" />
                                </label>
                                <label className='sibling-count'>
                                    Number of Siblings
                                    <input type='number' placeholder="Number of Siblings" name="Sibling Count" />
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
            <Footer />
        </div>
    );
}

export default Fillprofile;
