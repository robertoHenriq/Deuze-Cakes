import React from "react";
import { Navigate } from "react-router-dom";


interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");
  if (!token) {
    // versão compatível com qualquer React Router 6.x
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
