import pb from "lib/pocketbase";
import { useState, useEffect } from "react";

const LogOut = () => {
  const [dummy, reload] = useState(false);
  const [collec, setCollec] = useState("");
  const [GRT, setGRT] = useState(0);

  const adminuser = "admin@gmail.com";
  const adminpass = "adminadmin";

  function logout() {
    pb.authStore.clear();
    setGRT(0);
    setCollec(''); 
    localStorage.removeItem("currentuser");
    window.location.href="/";
    reload(!dummy);
  }
  return <button onClick={logout}>Logout</button>;
};

export default LogOut;
