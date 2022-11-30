import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/user/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import Logout from "./Logout";

export default function Header() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading }: any = useAuth0();

  console.log(isAuthenticated);
  console.log(user);

  return (
    <div className="">
      <div className="flex justify-between font-bold items-center">
        <Link to="/" className="text-2xl lowercase flex items-center gap-5">
          {!user ? <div>user</div> : <div>{user.nickname}</div>}
          <div className="flex items-center">
            {!user ? (
              <></>
            ) : (
              <div>
                <img className="rounded-full w-10" src={user.picture}></img>
              </div>
            )}
          </div>
        </Link>
        <Link to="dashboard" className="">
          dashboard
        </Link>
        <div className="flex items-center">
          {isAuthenticated ? <Logout /> : <LogIn />}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
