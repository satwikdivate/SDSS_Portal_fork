import React, { useState } from 'react';
import './Event.css';
import Header from '../../components/Header/Header';
import { createEvent } from '../../Services/operator';

const Event = ({ role }) => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const addEvent = async() => {
    if (eventName && eventDate && eventDescription) {
      const newEvent = {
        name: eventName,
        date: eventDate,
        description: eventDescription,
      };
      setEvents([...events, newEvent]);
      console.log(eventDate);
      console.log(eventDescription);
      console.log(eventName)

      const result =await createEvent(eventName,eventDescription,eventDate)
      setEventName('');
      setEventDate('');
      setEventDescription('');
      console.log(result);
    } else {
      alert('Please enter event name, date, and description');
    }
  };

  return (
    <>
    <div className="Event">
      <h1 className="app-heading">Event Management App</h1>


      {/* Add Event */}
      {/* Only Admin Role can Add Events */}
      {role === 'admin' && (
        <div>
          <div className="form-group">
            <label className="label">Event Name:</label>
            <input
              type="text"
              className="input"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Event Date:</label>
            <input
              type="date"
              className="input"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Event Description:</label>
            <textarea
              className="textarea"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="btn" onClick={addEvent}>
            Add Event
          </button>
        </div>
      )}


      {/* Display Events */}
      {/* Admin as well as user can see what are the upcoming events */}
      <div className=''>
        <h2 className="list-heading">Events:</h2>
        <ul className="list">
          {events.map((event, index) => (
            <li className="list-item" key={index}>
              <strong>{event.name}</strong> - {event.date}
              <p className="list-description">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Event;
