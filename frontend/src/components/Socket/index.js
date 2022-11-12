import React, { useState, useEffect } from "react";
// import io from socket.io-client"
import { io } from "socket.io-client";
// get the endpoint url from the .env file
const ENDPOINT = process.env.REACT_APP_SOCKET_URL;

function NewSoct() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  // connect to the server, the connection can be made in a separate file (context, redux, exported) and used here
  const socket = io.connect(ENDPOINT);

  const sendMessage = () => {
    // emit a `message` event with the value of the message
    socket.emit("message", message);
  };

  useEffect(() => {
    // add a an event listener on message events
    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    // remove all listeners on clean up
    return () => socket.removeAllListeners();
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}> Send </button>
      {messages.map((message, index) => {
        return <div key={index}> {message} </div>;
      })}
    </div>
  );
}

export default NewSoct;