import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkRole } from "@/utils"; // Assuming you have a utility to check roles

interface ProtectedRouteProps {
  element: React.ReactElement;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
  const hasAccess = !checkRole(allowedRoles);
  return hasAccess ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
