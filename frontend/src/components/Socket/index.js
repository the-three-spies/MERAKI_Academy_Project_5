// import React, { useState, useEffect } from "react";
// // import io from socket.io-client"
// import { io } from "socket.io-client";
// // get the endpoint url from the .env file
// const ENDPOINT = process.env.REACT_APP_SOCKET_URL;

// function NewSoct() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState();
//   // connect to the server, the connection can be made in a separate file (context, redux, exported) and used here
//   const socket = io.connect(ENDPOINT);

//   const sendMessage = () => {
//     // emit a `message` event with the value of the message
//     socket.emit("message", message);
//   };

//   useEffect(() => {
//     // add a an event listener on message events
//     socket.on("message", (data) => {
//       setMessages((messages) => [...messages, data]);
//     });

//     // remove all listeners on clean up
//     return () => socket.removeAllListeners();
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       />
//       <button onClick={sendMessage}> Send </button>
//       {messages.map((message, index) => {
//         return <div key={index}> {message} </div>;
//       })}
//     </div>
//   );
// }

// export default NewSoct;


import "./Socket.css"

import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//const socket = io.connect("http://localhost:3001");
const socket = io("http://localhost:3001",{autoConnect:false});
function NewSoct() {
  const {auth ,userId,token,stateRole }= useSelector((state) => {
    return {
      auth: state.auth.isLoggedIn,
      userId: state.auth.userId,
      token: state.auth.token,
      stateRole:state.auth.stateRole,
    };
  });
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  const [messagesend, setMessageSend] = useState("");
  const joinRoom = () => {
    // setRoom("Admin")
    if (room === "") {
      socket.emit("join_room", room);
    }
  };
  useEffect(()=>{
    socket.emit("join_room", room);
  },[])

  const sendMessage = () => {
    socket.emit("send_message", { message, room,userId,stateRole});
    setMessageSend(stateRole)
  };
  let newArray=[]

  socket.on("receive_message", (data) => {
     
    newArray.push(data.message)
    setMessageReceived([...messageReceived,data.message,data.userId]);
    //console.log(newArray)
   //// setMessageReceived(data.message);
    // {messageReceived.map((elem)=>{
    //   console.log(elem)
    //   return(<div><br>{elem}</br></div>)
    //         })}
   // console.log("newArray",messageReceived)
  });

  // useEffect(() => {}
  //   socket.on("receive_message", (data) => {
     
  //     newArray.push(data.message)
  //     setMessageReceived(newArray);
  //     //console.log(newArray)
  //    //// setMessageReceived(data.message);
  //     // {messageReceived.map((elem)=>{
  //     //   console.log(elem)
  //     //   return(<div><br>{elem}</br></div>)
  //     //         })}
  //    // console.log("newArray",messageReceived)
  //   });
  // }, [socket,setMessageReceived]);



  useEffect(() => {

socket.connect()

  },[])
  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom("event.target.value");
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
           setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      <br></br>
      {/* {messageReceived} */}
    
     {messageReceived&&messageReceived.map((elem,i)=>{
      
      console.log( "kop",stateRole)
     return(
      <>


{messagesend==1 && stateRole!=1 ?

     <div><img className="socitImage" src="./assets/images/pic2.png"/>{elem}</div>:<div><img className="socitImage" src="./assets/images/pic4.png"/>{elem}</div>}
   
     </>
     
     )

     })}
      <br></br>
    </div>
  );
}

export default NewSoct;