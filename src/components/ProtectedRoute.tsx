import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }: any) {
  if (!user) return <Navigate to="/" replace />;

  return children;
}
