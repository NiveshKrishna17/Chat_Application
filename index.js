const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const cron = require('node-cron')
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
     cors: {
          origin: "*",
          methods: ["GET", "HEAD"],
     }
});

io.on("connection", (socket) => {
     console.log(`User Connected: ${socket.id}`);

     socket.on("join_room", (rData) => {
          socket.join(rData);
     })

     socket.on('send_message', (data) => {
          socket.to(data.room).emit("receive_message", data);
     })

     // cron.schedule('*/5 * * * * *', () => {
     //      console.log('running a task every minute');
     //      io.to("123").emit("receive_message", "dfddd")
     // });
})

server.listen(3203, () => {
     console.log("Server listening on " + 3203);
});