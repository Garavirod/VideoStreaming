const express = require('express');
const app = express();
// CWe create an sever http for conections
const http = require('http').Server(app);

// To generating a conversation we're going to use socket.io
const io = require('socket.io')(http);

// Routes

app.use(require('./routes/streamzoom.routes'));


// To serving HTML

app.use(express.static(__dirname + "/public"));

// Evetnt type connection which opens a socket is going to execute a function
io.on('connection', (socket) => {
    // We add an event to the socket type stream 
    socket.on('stream', (image) => {
        // We emit the streamm to every socket conected
        socket.broadcast.emit('stream', image);
    })
});


module.exports = http;