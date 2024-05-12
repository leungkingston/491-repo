import React, { useState, useEffect } from 'react';
import pb from "lib/pocketbase";
import { useForm } from "react-hook-form";

export default function User() {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [userRecord, setUserRecord] = useState(null);
    const [email, setEmail] = useState("");
    const [dummy, reload] = useState(false);

    useEffect(() => {
        const collec = JSON.parse(localStorage.getItem("currentuser"));
        setEmail(JSON.parse(localStorage.getItem("currentname")));
        async function fetchUser() {
            setLoading(true);
            try {
                const record = await pb.collection('users').getOne(collec);
                setUserRecord(record);
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
            setLoading(false);
        }
        fetchUser();
    }, []);

    const changePrep = async (data) => {
        setLoading(true);
        try {
            await pb.collection('users').update(userRecord.id, { getreadytime: data.prepTime });
            alert('Prep time updated successfully!');
            reset(); 
        } catch (error) {
            alert('Failed to update prep time: ' + error.message);
        }
        setLoading(false);
        reset();
        window.location.href="/User";
        reload(!dummy);
    };

    if (!userRecord) return <p>Loading user data...</p>;

    return (
        <div className="loginbod">
            <div className="login">
                <h3>User: {email}</h3>
                <h4>Current prep time is set to: {userRecord.getreadytime} min</h4>
                <form onSubmit={handleSubmit(changePrep)}>
                    <div className="input-box">
                        <h4>Change prep time</h4>
                        <input type="text" placeholder="New prep time" {...register("prepTime")} />
                    </div>
                    <div className="prepButton">
                        <button className="loginb" type="submit" disabled={isLoading}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
