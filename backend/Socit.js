//const { Server}=require("socket.io")
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(3001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
//   console.log(socket);
  socket.on("join_room", (data) => {
    console.log(data)
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    // console.log("gg",data.HIND)
    io.to([data.room]).emit("receive_message", data);
  });
});

// server.listen(3001, () => {
//   console.log("SERVER IS RUNNING");
// });