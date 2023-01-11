import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <button
      className=" bg-orange-200/70 rounded-xl text-black cursor-pointer"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <p className="p-3">logout</p>
    </button>
  );
}
