import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/user/userSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);

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
          <a className="bg-black rounded-xl text-white cursor-pointer">
            <div className="p-3" onClick={() => dispatch(login())}>
              sign in
            </div>
          </a>
          <a className="mx-3 bg-red-500 rounded-xl text-white cursor-pointer">
            <div className="p-3" onClick={() => dispatch(logout())}>
              log out
            </div>
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
