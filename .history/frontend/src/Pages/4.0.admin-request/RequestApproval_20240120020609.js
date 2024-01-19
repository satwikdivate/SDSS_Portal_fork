import React, { useState, useEffect } from 'react';
import { getApproverequest, getPendingRequest, getById, approveRequest } from '../../Services/operator';
import "./RequestApproval.css";
import Header from '../../components/Header/Header';
// ... (imports and other code)

const RequestApproval = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [userDetailsMap, setUserDetailsMap] = useState({});

  useEffect(() => {
    const fetchRequests = async () => { 
      try {
        // Fetch approved requests
        const approved = await getApproverequest();
        setApprovedRequests(approved.data);

        // Fetch pending requests
        const pending = await getPendingRequest();
        setPendingRequests(pending.data);
        console.log(pending.data);


        // Fetch user details for all requests
        const allRequests = [...approved.data, ...pending.data];
        const usersDetailsPromises = allRequests.map(request => getById(request.user));
        const usersDetails = await Promise.all(usersDetailsPromises);

        // Create a map of user details with user ID as the key
        const userDetailsMap = {};
        usersDetails.forEach(user => {
          userDetailsMap[user.data._id] = user.data;
        });

        setUserDetailsMap(userDetailsMap);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (userId, requestId) => {
    alert(`Request ${requestId} accepted`);
    try {
      const admin = localStorage.getItem('loggedInId');
      console.log(admin);
      console.log(userId, admin._id, requestId, "Approved", "Operator");

      const response = await approveRequest(userId, admin, requestId, "Approved", "Operator")
      console.log(response);
    } catch (e) {
      console.log("Failed to approve request");
    }
  };

  const handleReject = (async (userId, requestId) => {
    alert(`Request ${requestId} Rejected`);
    try {
      const admin = localStorage.getItem('loggedInId');
      console.log(admin);
      console.log(userId, admin._id, requestId, "Disapproved", "Student");

      const response = await approveRequest(userId, admin, requestId, "Rejected", "Student")
      console.log(response);
    } catch (e) {
      console.log("Failed to approve request");
    }
  });

  const renderRequestSection = (requests) => {
    if (!requests || !userDetailsMap || Object.keys(userDetailsMap).length === 0) {
      return <p>Loading...</p>;
    }

    return requests.map((request) => (
      <div key={request._id} className="request-item">
        <p>User Name: {userDetailsMap[request.user]?.firstName + " " + userDetailsMap[request.user]?.lastName}</p>
        <p>Status: {request.status}</p>
        <p>Role: {userDetailsMap[request.user]?.role}</p>
        <div className="button-container">
          {request.status === 'Pending' && (
            <>
              <button id='accept' onClick={() => handleAccept(request.user, request._id)}>Accept</button>
              <button id='reject' onClick={() => handleReject(request.user, request._id)}>Reject</button>
            </>
          )}
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="request-approval-container">
        <h2>Pending Requests</h2>
        {renderRequestSection(pendingRequests)}

        <h2>Approved Requests</h2>
        {renderRequestSection(approvedRequests)}
      </div>
    </>
  );
};

export default RequestApproval;
