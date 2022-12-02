import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/user/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import Logout from "./Logout";

export default function Header() {
  const { user, isAuthenticated, isLoading }: any = useAuth0();

  return (
    <div className="fixed w-screen px-2 lg:px-20">
      <div className="flex justify-between font-bold items-center">
        <Link to="/" className="text-2xl lowercase flex items-center gap-5">
          home
          <div className="flex items-center ">
            {!user ? (
              <></>
            ) : (
              <div>
                <img className="rounded-full w-10" src={user.picture} />
              </div>
            )}
          </div>
        </Link>
        <Link to="dashboard" className="text-2xl">
          todo
        </Link>
        <div className="flex items-center">
          {isAuthenticated ? <Logout /> : <LogIn />}
        </div>
      </div>
      <div className="w-100 border bg-orange-200/50 mt-3 rounded" />
      <Outlet />
    </div>
  );
}
