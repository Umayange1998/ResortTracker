import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {

  const Authentication = useSelector(
    (state) => state.isAuth.authStatus
  );
  console.log('Authentication',Authentication)

  if (!Authentication) {
    return <Navigate to="/" />;
  }
  return <Outlet/>;
}

export default ProtectedRoute;
