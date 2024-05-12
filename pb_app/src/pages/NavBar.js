import pb from "lib/pocketbase";
import { Link } from "react-router-dom";
// import pb from "lib/pocketbase";
import { useState, useEffect } from "react";

export default function NavBar() {
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
      <header className="header">
        <div class="topnav">
          <a
            // style={{ marginLeft: "65%" }}
            className="logoutbutt"
            href="/"
            onClick={logout}
          >
            {" "}
            Logout <i class="fa-solid fa-right-from-bracket"></i>
          </a>
          <a href="/User"> User Settings </a>
          <a href="/About"> About Us </a>
          <a href="/AddOne"> New Event </a>
          <a href="/Viewer"> Schedule </a>
          <a href="/"> Home </a>
          <div className="blank"></div>
          <a className="tlogo" href="/"> timewise </a>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div class="topnav">
          <a style={{ marginLeft: "0" }} className="regbutt" href="signup">
            {" "}
            Sign Up{" "}
          </a>
          <a href="login"> Log In </a>
          <a href="/Contact"> Contact </a>
          <a href="/About"> About Us </a>
          <a href="/Features"> Features </a>
          <a href="/"> Home </a>
          <div className="blank"></div>
          <a className="tlogo" href="/"> timewise </a>
        </div>
      </header>
    );
  }
}
