import React, { useState, useEffect } from 'react';
import './CreateClass.css';
import { getAllOperators } from '../../Services/operator';

const CreateClass = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [formValues, setFormValues] = useState({
    teacherId: '',
    className: '',
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setloading(true);
        const result = await getAllOperators();
        console.log(result.data.data);
        setTeachers(result.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setloading(false);
      }
    };

    fetchTeachers();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleclose = () => {
    closeModals();
  };

  const closeModals = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the teacherId and className from formValues
    const { teacherId, className } = formValues;
    // Perform further actions with teacherId and className as needed
    console.log('Teacher ID:', teacherId);
    console.log('Class Name:', className);
    closeModals();
  };

  return (
    <div className='add-card-grade' onClick={openModal}>
      <h1 className='addclass'>+</h1>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close-btn" onClick={handleclose}>
              <h1>X</h1>
            </div>
            <h3>Create New Class</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="className">Class Name:</label>
              <select
                id="className"
                name="className"
                value={formValues.className}
                onChange={(e) => handleInputChange('className', e.target.value)}
              >
                <option value="" disabled>Select a class</option>
                {[...Array(12)].map((_, index) => (
                  <option key={index + 5} value={index + 5}>
                    {`${index + 5}th Class`}
                  </option>
                ))}
              </select>

              <label htmlFor="classTeacher">Class Teacher:</label>
              <select
                id="classTeacher"
                name="classTeacher"
                value={formValues.teacherId}
                onChange={(e) => handleInputChange('teacherId', e.target.value)}
              >
                <option value="" disabled>Select a teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    {teacher.firstName + " " + teacher.lastName}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                style={{
                  background: "#3498db",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                Create Class
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateClass;
