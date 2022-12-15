import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Dashboard() {
  const { user, isAuthenticated }: any = useAuth0();

  console.log(user);
  return <div>Welcome to your profile!</div>;
}
