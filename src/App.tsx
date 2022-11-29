import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { login, logout } from "./features/user/userSlice";

function App() {
  const value = useAppSelector((state) => state.user.value);
  return (
    <div className="font-inter px-2 xl:px-40 py-8 min-h-screen bg-orange-200/20">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={value.isOnline}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
