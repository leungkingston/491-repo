import React, { useRef, useState, useEffect } from 'react';
import pb from "lib/pocketbase";
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const center = { lat: 33.8823, lng: -117.8851 };

function AddOne() {

  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [preppy, setPreppy] = useState('');
  const [durPB, setDurPB] = useState('');
  const [timed, setTimed] = useState('');
  const [selectedDate, setSelectedDate] = useState("");
  const [collec, setCollec] = useState("");
  const [dummy, reload] = useState(false);
  const [userRecord, setUserRecord] = useState(null);

  useEffect(() => {
    const currentID = JSON.parse(localStorage.getItem("currentuser"));
        if (currentID) {
            setCollec(currentID);
        }
    }, []);

    useEffect(() => {
        console.log("collec:", collec);  // Check what collec is when this runs
        if (collec) {
            async function fetchUser() {
                console.log("Fetching user with ID:", collec);
                setLoading(true);
                try {
                    const record = await pb.collection('users').getOne(collec);
                    console.log("Fetched user record:", record);
                    setUserRecord(record);
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                }
                setLoading(false);
            }
            fetchUser();
        }
    }, [collec]);



    const hrRef = useRef();
    const minRef = useRef();
    const nameRef = useRef();
    const originRef = useRef();
    const destinationRef = useRef();
    const ampmRef = useRef();

    function calcAMPM() {
        setTimed(hrRef.current.value);
        let currentValue = parseInt(hrRef.current.value, 10);
        if (ampmRef.current.value === 'pm' && currentValue !== 12) {
            let newIntValue = currentValue + 12;
            setTimed(newIntValue.toString());    
        } else if (ampmRef.current.value === 'am' && currentValue === 12) {
            setTimed('00');
        }
    }
    useEffect(() => {
        async function createEvent() {
            if (timed) {  // Ensure timed is set before proceeding
                const neweta = parseInt(durPB);
                const purep = parseInt(preppy);
                console.log("prep time", preppy);
                const datie = new Date(selectedDate);
                datie.setHours(parseInt(timed, 10));
                datie.setMinutes(parseInt(minRef.current.value, 10));
                const departdatie = new Date(datie);
                departdatie.setMinutes(departdatie.getMinutes() - neweta);
                const prepdatie = new Date(departdatie);
                prepdatie.setMinutes(prepdatie.getMinutes() - purep);

                try {
                    const item = await pb.collection(collec).create({
                        'name': nameRef.current.value,
                        'addr1': originRef.current.value,
                        'addr2': destinationRef.current.value,
                        'date': datie.toISOString(),
                        'depart': departdatie.toISOString(),
                        'prep': prepdatie.toISOString(),
                        'getready': 'true',
                        'eta': neweta
                    });
                    alert(`EVENT ${nameRef.current.value} successfully created!`);
                    reset();  
                    window.location.href = "/Viewer";  
                    reload(!dummy);  
                } catch (e) {
                    console.error(e);
                    alert(e.message);
                }
            }
        }

        createEvent();
    }, [timed]); 

    async function itemYep() {
        setLoading(true);
        await calculatePrep();
        await calculateRoute();
        calcAMPM(); 
    }
    

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) {
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    const durationInSeconds = results.routes[0].legs[0].duration.value;
    const durationInMinutes = durationInSeconds / 60; 
    setDurPB(durationInMinutes);
  }

  async function calculatePrep() {
    const pretime = userRecord.getreadytime.toString();
    setPreppy(pretime);
}
  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    
    <div style={{ display: 'flex', height: 'calc(100vh - 70px)', paddingTop: '0px'}}>
      <div style={{ flex: '0 0 auto', width: '30%', padding: '16px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1>Create a new event</h1>

        <div style={{ marginBottom: 1 }}>
            <input type='text' placeholder='Name' ref={nameRef}/>
        </div>
        <div style={{ marginBottom: 1 }}>
          <Autocomplete>
            <input type='text' placeholder='Origin' ref={originRef} />
          </Autocomplete>
        </div>
        <div style={{ marginBottom: 1 }}>
          <Autocomplete>
            <input type='text' placeholder='Destination' ref={destinationRef} />
          </Autocomplete>
        </div>
        <div style={{ marginTop:1, display: 'flex', alignItems: 'center' }}>
          <button className="calcb" style={{ backgroundColor: '#61828A', color: 'white', border: 'none', padding: '8px', borderRadius: 4 }} onClick={calculateRoute}>
            Calculate Route
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={clearRoute}>
            <FaTimes />
          </button>
          <div style={{ marginTop: 8, marginLeft:'100px' }}>
          <div>Distance: {distance}</div>
          <div>Duration: {duration}</div>
        </div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <DatePicker 
                    value={selectedDate} 
                    onChange={setSelectedDate}
                    />
                  <br />
        </div>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Time: {" "}
              <select className="hr" ref={hrRef} style={{ marginLeft:5, marginRight: 5 }}> 
                <option value="00" disabled selected>HR</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="min" ref={minRef} style={{ marginRight: 5 }}>
                <option value="" disabled selected>MIN</option>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </select>
              <select className="ampm" ref={ampmRef}>
                <option value="" disabled selected>Select</option>
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            <br />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Current Prep Time set to: {userRecord ? userRecord.getreadytime : "Loading..."} minutes</p>
        </div>
        <div style={{ marginTop:16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="loginb" style={{ backgroundColor: '#61828A', color: 'white', border: 'none', padding: '8px', borderRadius: 4 }} onClick={itemYep}>
            ADD TO SCHEDULE
          </button>
        </div>
      </div>
      <div style={{ flex: '1', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%' }}>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default AddOne;
