import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/user/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import Logout from "./Logout";

export default function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="">
      <div className="flex justify-between font-bold items-center">
        <Link to="/" className="text-3xl lowercase">
          {user.name || "user"}
        </Link>
        <Link to="dashboard" className="">
          dashboard
        </Link>
        <div className="flex items-center">
          <LogIn />
          <a className="mx-3 bg-red-500 rounded-xl text-white cursor-pointer">
            <Logout />
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
