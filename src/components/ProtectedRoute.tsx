import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute({ user, children }: any) {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}
