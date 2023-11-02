// PrivateRouteAdmin.js
import React from 'react';
import {Navigate } from 'react-router-dom';

const PrivateRouteAdmin = ({ element, isAuthenticated, role }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (role === 'admin') {

    return element;
  } else {
    // If the role is not 'admin', redirect to a different route or show an error page
    return <Navigate to="/unauthorized" />;
  }
};

export default PrivateRouteAdmin;
