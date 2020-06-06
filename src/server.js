/*
* run serve - node src/server
*/

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const message = (name, text, id) => ({name, text, id});

app.use(express.static(publicPath));

const users = {};
io.on('connection', socket => {

  console.log('connection');

  socket.on('loginUser', function(){
    users[socket.id] = 'user';
    io.emit('login', users);
    console.log(users);
  });

  socket.on('startClock', () => {
    io.emit("start");
  });

  socket.on('toggleClock', () => {
    io.emit("toggle");
  });

  socket.on('stopClock', () => {
    io.emit("stop");
  });

  socket.on('resetClock', () => {
    io.emit("reset");
  });


  socket.on('disconnect', () => {
    console.log('disconnect');
    delete users[socket.id];
  })
});

server.listen(port, () => {
  console.log(` server has been started on port ${port}`);
});
