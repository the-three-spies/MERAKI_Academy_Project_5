import React from 'react'
import Sidebar from './Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import "./style.css";
const Events = () => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  //===============================================================

  const senInvitation = async () => {
  try {
    const result = await axios.post(
      `http://localhost:5000/email/invitation`,date,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
    if (result.data.success) {
      setStatus(true);
      setMessage("Invitation Sent");
    } else {
      throw Error;
    }
  } catch (error) {
    if (!error.response.data.success) 
    {
      setStatus(false);
      setMessage(error.response.data.message);
    }
  
  }
    
  }

//===============================================================
  return (
    <>
      <div className='admin_panal'>
        <div className='container_panel'>
          <Sidebar />
          <div className='main_dashbored'>
            <h1> Event Schedule</h1>
            <h1>FitratInsan App</h1>
            {/* <div className='space'></div> */}
            <div className='date'><span>If you would like to invite donors to the charity event, set a date</span>
             <div><input type="date" required onChange={(e) => {
                setDate(e.target.value)
              }}></input></div>
          <div> <button onClick={senInvitation}> Send Invitation </button></div></div> 
          {status
            ? message && <div className="SuccessMessage">{message}</div>
            : message && <div className="ErrorMessage">{message}</div>}
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Events