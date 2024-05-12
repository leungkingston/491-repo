import pb from "lib/pocketbase";
import React from "react";
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./pages/Features";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import AddOne from "./pages/AddOne";
import Viewer from "./pages/Viewer";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [dummy, reload] = useState(false);
  const [collec, setCollec] = useState("");

  const adminuser = "admin@gmail.com";
  const adminpass = "adminadmin";

  function logout() {
    pb.authStore.clear();
    setCollec(""); // Reset the collection on logout
    localStorage.removeItem("currentuser");
    window.location.href="/";
    reload(!dummy);
  }

  if (pb.authStore.isValid) {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Viewer" element={<Viewer />} />
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<User />} />
          <Route path="/AddOne" element={<AddOne />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/About" element={<About />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AddOne" element={<AddOne />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
