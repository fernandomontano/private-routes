import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="bg-emerald-500/40 rounded-xl text-white cursor-pointer p-3"
      onClick={() => loginWithRedirect()}
    >
      login
    </button>
  );
}
