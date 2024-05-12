import pb from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LogIn() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [dummy, reload] = useState(false);
  const [GRT, setGRT] = useState(0);
  const [nextOne, setNext] = useState("");

  const adminuser = "admin@gmail.com";
  const adminpass = "adminadmin";

  async function login(data) {
    setLoading(true);
    try {
      const authData = await pb.collection('users').authWithPassword(data.user, data.pass);
      const getusername = authData.record.id;
      const getname = authData.record.email;
      setGRT(authData.record.getreadytime);
      localStorage.setItem("currentuser", JSON.stringify(getusername));
      localStorage.setItem("currentname", JSON.stringify(getname));
      reset();
      window.location.href="/AddOne";
    } catch (e) {
      alert(e);
      reset();
      window.location.href="/Login";
    }
    setLoading(false);
    reload(!dummy);
  }
  function regi(){
    reset();
    window.location.href="/SignUp";
    reload(!dummy);
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <body className="loginbod">
      <div className="login">
      <h1>Log In</h1>
        <form onSubmit={handleSubmit(login)}>
          <div className="input-box">
            <input type="text" placeholder="email" {...register("user")} />
          </div>
          <div className="input-box">
          <input type="password" placeholder="password" {...register("pass")} />
          </div>
          <div className="loginButton">
            <button className="loginb" type="submit" disabled={isLoading}>Log In</button>
          </div>
        </form>
        <form onSubmit={handleSubmit(regi)}>
          <h4 className="dontacc">Don't have an account?<button className="dontareg" type="submit" disabled={isLoading}>Register</button></h4>
        </form>
        
      
      </div>
      </body>
    </>
  );
}
