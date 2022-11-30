import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <button
      className="p-3"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      log out
    </button>
  );
}
