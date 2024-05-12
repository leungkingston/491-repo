import pb from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';

export default function Viewer() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const [collec, setCollec] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (collec) {
      view(); // Call the view function once when collec state is set
    }
  }, [collec]);

  useEffect(() => {
    setCollec(JSON.parse(localStorage.getItem("currentuser")));
    setEmail(JSON.parse(localStorage.getItem("currentname")));
  }, [view]);


  
  const [hourState, setHours] = useState(0);
  const checkAndAlert = () => {
    const currentDate = new Date();

    records.forEach((item) => {
      const itemDate = new Date(item.depart);
      const prepDate = new Date(item.prep);

      if (Math.abs(itemDate.getTime() - currentDate.getTime()) < 5000) {
        alert(`It's time to depart for ${item.name}!`);
      }
      
      if (Math.abs(prepDate.getTime() - currentDate.getTime()) < 5000) {
        alert(`Get ready for ${item.name}!`);
      }
    });
  };
  useEffect(() => {
    // Check and alert every minute (adjust the interval as needed)
    const intervalId = setInterval(checkAndAlert, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [records]); // Trigger the effect when records are updated

  function alertf(){
    alert(`Alert for departure:\n\tIt's time to depart for {item.name}!\n\nAlert to get ready:\n\tGet ready for {item.name}!`);
  }

  async function view() {
    setLoading(true);
    try {
      const itemRecords = await pb.collection(collec).getFullList({
        sort: 'date',
      });
  
      const results = itemRecords.map((record) => {
        // Convert date and time from UTC to PST and from 24-hour to 12-hour format
        const pstDateTime = new Date(record.date);
        const formattedDate = pstDateTime.toLocaleDateString('en-US');
        const formattedTime = pstDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        const dDateTime = new Date(record.depart);
        const dDate = dDateTime.toLocaleDateString('en-US');
        const dTime = dDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const departFormatted = dDate + " @" + dTime;

        const pDateTime = new Date(record.prep);
        const pDate = pDateTime.toLocaleDateString('en-US');
        const pTime = pDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const prepFormatted = pDate + " @" + pTime;
  
        return {
          name: record.name,
          addr1: record.addr1,
          addr2: record.addr2,
          date: formattedDate, // Formatted date
          time: formattedTime, // Formatted time
          depart: departFormatted,
          prep: prepFormatted,
          readybool: record.getready,
          m_eta: record.eta
        };
      });
  
      setRecords(results);
      setTotal(itemRecords.length);
    } catch (e) {
      console.log("ERROR FETCHING RECORDS: ", e);
      alert(e);
    }
    setLoading(false);
  }
  
  async function del(dname) {  // delete
    setLoading(true);
    try {
      const findr = await pb.collection(collec).getFirstListItem(`name="${dname}"`);
      console.log(findr.id);
      console.log(dname);
      await pb.collection(collec).delete(findr.id);
    } catch (e) {
      console.log("ERROR FETCHING RECORDS: ", e);
      alert(e);
    }
    view();
    setLoading(false);
  }
  
  if (pb.authStore.isValid){
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <h1 className="smallert">Schedule</h1>
      <h4 style={{ textAlign: 'center' }}>User: {email}</h4>
      <form className="load" onSubmit={handleSubmit(view)}>
        <button className="lbut" type="submit" disabled={isLoading}>
          Load Schedule
        </button>
      </form>
      <h3 className="totalv">Total: {total} Events Scheduled</h3>
      <div className="purchase-history">
        <ul className="tab-container">
          {records.map((item, index) => (
            <li key={index} className="tab">
                  <div>
                    <strong>Event:</strong> {item.name}
                  </div>
                  <div>
                    <strong>Destination:</strong> {item.addr2}
                  </div>
                  <div>
                    <strong>Origin:</strong> {item.addr1}
                  </div>
                  <div>
                    <strong>Date:</strong> {item.date}
                  </div>
                  <div>
                    <strong>Time:</strong> {item.time}
                  </div>
                  <div>
                    <strong>Depart Time:</strong> {item.depart}
                  </div>
                  <div>
                    <strong>Prep Time:</strong> {item.prep}
                  </div>
                  <div>
                    <strong>ETA:</strong> {item.m_eta} min
                  </div>
              <div>
                <form
                  className="delete-form"
                  onSubmit={(e) => handleSubmit(() => del(item.name))(e)}
                >
                  <button className="delete" type="submit" disabled={isLoading}>
                    Delete
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
  }
  return(
    <>
      <div className="section">
          <div className="title">
            <h1>Manage your Schedule</h1>
          </div>
          <div className="features">
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <h2>Personalized Collections</h2>
              <p>
              Access your custom collection for seamless itinerary management. Ensure your schedule data 
              is securely stored, offering a personalized and convenient overview of your daily agenda.
              </p>
              <a href="https://pocketbase.io/docs/collections/" className="boottoon">Read More</a>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h2>Add / Delete Events</h2>
              <p>
              Efficiently control your schedule with our app. Seamlessly add or remove events for real-time updates, 
              providing a clear overview for effective time management. Stay on top of your tasks, 
              ensuring an up-to-date record of your commitments.
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="boottoon rick"><span>Read More</span></a>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-address-card"></i>
              </div>
              <h2>Register or Log In</h2>
              <p>
              New users, register for complete schedule management. Unlock personalized features, secure data storage, 
              and powerful tools. Returning users, log in to access your tailored schedule dashboard.
              </p>
              <div className="nextTo">
                <a href="signup" className="boottoon">Sign Up</a><a href="login" className="boottoon">Log In</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}