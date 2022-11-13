// const { application } = require("express");
// const { Server}=require("socket.io")

//  const io = new Server(3001);

//  //io.attach(3000);

 

// io.on("connection", (socket) => {
//   console.log(socket.id)
//   io.emit("news","hello from server")
// });

// application.get("/",(req,res)=>{
//   res.json("600")
//   console.log("hind")
//   })
// io.listen();
//httpServer.listen(3000);
const app = require('express')();

const server = app.listen(3001, function(res) {
  console.log('Server is running');
});

//const socket = require('socket.io');

//const io = socket(server);



const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', function(socket) {
  
  console.log("rasha")
  // console.log("hind")
 // socket.on('SEND_MESSAGE', function(data) {
    //alert("Hello! I am an alert box!!");
    console.log(socket.id)
    io.emit('RECEIVE_MESSAGE', "data");
 // });
});