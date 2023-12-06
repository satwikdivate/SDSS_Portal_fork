import React, { useState } from 'react';
import './CreateClass.css';

const CreateClass = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const openModal = () => {
    setIsModalOpen("open");
  };

  const handleclose = () =>{
    closeModals();
  }

  const closeModals = () => {
    setIsModalOpen("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModals();
  };

  return (
    <div className='add-card-grade' onClick={openModal}>
      <h1 className='addclass'>+</h1>
      {isModalOpen === "open" && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close-btn" onClick={handleclose}><h1>X</h1></div>
            <h3>Create New Class</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="className">Class Name:</label>
              <input type="text" id="className" name="className" required />

              <label htmlFor="classTeacher">Class Teacher:</label>
              <input type="text" id="classTeacher" name="classTeacher" required />

              <label htmlFor="classMonitor">Class Monitor:</label>
              <input type="text" id="classMonitor" name="classMonitor" required />

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
