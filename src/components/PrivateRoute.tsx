import React, { type JSX } from "react";

import { useAuth } from "../context/auth";
import { Navigate } from "react-router";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { token, isLoading } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!token) return <Navigate to="/login" replace />;
  return children;
};
