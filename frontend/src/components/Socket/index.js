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




import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function NewSoct() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });

  };
  //let newArray=[]
  useEffect(() => {
    socket.on("receive_message", (data) => {
      
     // newArray.push(data.message)
      //console.log(newArray)
      setMessageReceived(data.message);
      // {messageReceived.map((elem)=>{
      //   console.log(elem)
      //   return(<div><br>{elem}</br></div>)
      //         })}
     // console.log("newArray",messageReceived)
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
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
      {messageReceived}
     
      <br></br>
    </div>
  );
}

export default NewSoct;