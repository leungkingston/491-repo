import pb from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [dummy, reload] = useState(false);
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const [collec, setCollec] = useState("");

  const adminuser = "admin@gmail.com";
  const adminpass = "adminadmin";

  function logout() {
    pb.authStore.clear();
    setCollec("");
    localStorage.removeItem("currentuser");
    window.location.reload();
    reload(!dummy);
  }

  function logi(){
    reset();
    window.location.href="/Login";
    reload(!dummy);
  }
  async function regnew(data) {
    setLoading(true);
    const newuser = {
      "email": data.r_user,
      "emailVisibility": true,
      "password": data.r_pass,
      "passwordConfirm": data.r_passConfirm,
      "getreadytime": 60
    };
    try {
      const anotheruser = await pb.collection('users').create(newuser);
      alert("NEW ACCOUNT CREATED!");
    
      const authData = await pb.admins.authWithPassword(adminuser, adminpass);
      const getusername = anotheruser.id;
      localStorage.setItem("currentuser", JSON.stringify(getusername));
      
      const base = await pb.collections.create({
        name: getusername,
        type: 'base',
        listRule: '',
        viewRule: '',
        createRule: '',
        updateRule: '',
        deleteRule: '',
        schema: [
          {
            name: 'name',
            type: 'text',
            required: true,
          },
          {
            name: 'addr1',
            type: 'text',
            required: true,
          },
          {
            name: 'addr2',
            type: 'text',
            required: true,
          },
          {
            name: 'date',
            type: 'date',
            required: true,
          },
          {
            name: 'depart',
            type: 'date',
            required: true,
          },
          {
            name: 'prep',
            type: 'date',
            required: true,
          },
          {
            name: 'eta',
            type: 'number',
            required: true,
          },
          {
            name: 'getready',
            type: 'bool',
            required: false,
          },
        ],
      });
    
    } catch (e) {
      const alrt = 'ERROR: An account with that email already exists!';
      alert(alrt+"\n\n"+ e);    //i think that is what will happen in most cases
      //alert(e);
    } finally {
      logout();
      setLoading(false);
    }
    
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <body className="loginbod">
      <div className="regn">
      <h1>Register</h1>
        <form onSubmit={handleSubmit(regnew)}>
        <div className="input-box">
          <input type="text" placeholder="email" {...register("r_user")} />
          </div> 
        <div className="input-box">  
          <input
            type="password"
            placeholder="password"
            {...register("r_pass")}
          />
          </div> 
        <div className="input-box"> 
          <input
            type="password"
            placeholder="Confirm password"
            {...register("r_passConfirm")}
          />
        </div> 
          <div className="loginButton">
            <button className="loginb" type="submit" disabled={isLoading}>
            Register
          </button>
          </div>
        </form>
        <form onSubmit={handleSubmit(logi)}>
          <h4 className="dontacc">Already have an account?<button className="dontareg" type="submit" disabled={isLoading}>Sign In</button></h4>
        </form>
      </div>
      </body>
    </>
  );
}
