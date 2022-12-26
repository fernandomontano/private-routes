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
  const [userData, setUserData]: any = useState();
  const { user, isAuthenticated }: any = useAuth0();
  const [addNewUser, response] = useAddNewUserMutation();

  useEffect(() => {
    if (user) {
      addNewUser({ name: user.nickname, email: user.email, token: user.sub });
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;

    setUserData({
      name: user.nickname,
      email: user.email,
      token: user.sub,
    });
  }, [user]);

  return (
    <div className="fixed w-screen px-2 lg:px-20">
      <header className="flex justify-between font-bold items-center">
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
      </header>
      <div className="w-100 border bg-orange-200/50 mt-3 rounded" />
      <Outlet />
    </div>
  );
}

function createUser(name: string, email: string, token: string) {
  const response = UserFeatures.postUser(name, email, token);
}
