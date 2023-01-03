import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./layout/Header";
import Profile from "./pages/Profile";
import CreateNote from "./pages/CreateNote";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="m-1 p-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-note" element={<CreateNote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
