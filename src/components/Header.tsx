import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import Logout from "./Logout";
import * as UserFeatures from "../api/User";
import {
  useGetUserByTokenQuery,
  useAddNewUserMutation,
} from "../services/user";
interface User {
  name: string;
  email: string;
  token: string;
}

export default function Header() {
  const { user, isAuthenticated }: any = useAuth0();
  const [addNewUser, response] = useAddNewUserMutation();

  useEffect(() => {
    if (!user) return;
    addNewUser({ name: user.nickname, email: user.email, token: user.sub });
  }, [user]);

  return (
    <div className="">
      <header className="fixed w-full lg:px-40 bg-white/30 drop-shadow-md">
        <div className="flex justify-between font-bold items-center w-full my-4">
          <Link to="/" className="text-2xl lowercase flex items-center gap-5 ml-3">
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
          <div className="flex items-center mr-3">
            {isAuthenticated ? <Logout /> : <LogIn />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
