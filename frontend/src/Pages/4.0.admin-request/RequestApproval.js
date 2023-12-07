import React, { useState, useEffect } from 'react';
import { getApproverequest, getPendingRequest, getById } from '../../Services/operator';
import "./RequestApproval.css";
import Header from '../../components/Header/Header';

const RequestApproval = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Fetch approved requests
        const approved = await getApproverequest();
        setApprovedRequests(approved.data);

        // Fetch pending requests
        const pending = await getPendingRequest();
        setPendingRequests(pending.data);

        // Fetch user details for all requests
        const allRequests = [...approved.data, ...pending.data];
        const usersDetailsPromises = allRequests.map(request => getById(request.user));
        const usersDetails = await Promise.all(usersDetailsPromises);
        setUserDetails(usersDetails);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = (requestId) => {
    console.log(`Request ${requestId} accepted`);
    // Handle accept logic here
  };

  const handleReject = (requestId) => {
    console.log(`Request ${requestId} rejected`);
    // Handle reject logic here
  };

  const renderRequestSection = (requests) => {
    if (!requests || !userDetails || userDetails.length === 0) {
      // Return a loading state or handle appropriately when data is not yet available
      return <p>Loading...</p>;
    }

    return requests.map((request, index) => (
      <div key={request._id} className="request-item">
        <p>User Name: {userDetails[index]?.data?.firstName + " " + userDetails[index]?.data?.lastName}</p>
        <p>Status: {request.status}</p>
        <p>Role: {userDetails[index]?.data?.role}</p>
        <div className="button-container">
          <button id='accept' onClick={() => handleAccept(request._id)}>Accept</button>
          <button id='reject' onClick={() => handleReject(request._id)}>Reject</button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
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
