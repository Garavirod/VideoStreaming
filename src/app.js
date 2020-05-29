const express = require('express');
const app = express();
// CWe create an sever http for conections
const http = require('http').Server(app);

// To generating a conversation we're going to use socket.io
const io = require('socket.io')(http);

// Routes

app.use('./routes/streamzoom.routes');


// HTML

app.use(express.static(__dirname + "/publuc"));