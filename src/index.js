const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = `${__dirname}/public`;

http.listen(port, () => {
    console.log("Express and socket.io works on port %d ", port);
});

app
//those Who is emmiting streaming
    .get('/', (req, res) => {
    res.sendFile(`${publicDir}/cli.html`);
})

// thos Who onley can watvh the video streaming
.get('/streaming', (req, res) => {
    res.sendFile(`${publicDir}/server.html`);

})


io.on('connection', (socket) => {

});