import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <button
      className="mx-3 bg-red-500 rounded-xl text-white cursor-pointer"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <p className="p-3">log out</p>
    </button>
  );
}
