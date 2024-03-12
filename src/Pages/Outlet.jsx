import React from "react";
import Header from "../Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Marks from "./Marks";
import Attendance from "./Attendance";
import Sidebar from "../Components/Sidebar/Sidebar";
import Settings from "./Settings";
import Profile from "./Profile";
// import Login from "./Login";
// import LoginSignup from "./LoginSignup";
const Outlet = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/marks" element={<Marks />} />
              <Route path="/attendance" element={<Attendance />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/login" element={<LoginSignup />} /> */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Outlet;
