import React, { useState, useEffect } from 'react';
import { getAllRequest } from '../../Services/operator';
import "./RequestApproval.css"
import Header from '../../components/Header/Header';

const RequestApproval = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Assuming getAllRequest is an asynchronous function that fetches requests
    const fetchData = async () => {
      try {
        const allRequests = await getAllRequest();
        console.log(allRequests.dat)
        setRequests(allRequests.dat);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = (requestId) => {
    
    console.log(`Request ${requestId} accepted`);
  };

  const handleReject = (requestId) => {
    // Handle reject logic here
    console.log(`Request ${requestId} rejected`);
  };

  return (
    <>
    <Header />
    <div className="request-approval-container">
      <h2>Request Admin Approval</h2>
      {requests.map((request) => (
        <div key={request._id} className="request-item">
          <p>Requested ID: {request._id}</p>
          <p>User Name: {request.user}</p>
          <p>Status: {request.status}</p>
          <p>Role </p>
          <div className="button-container">
            <button id='accept' onClick={() => handleAccept(request._id)}>Accept</button>
            <button id='reject' onClick={() => handleReject(request._id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default RequestApproval;
