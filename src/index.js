const http = require('./app');
const port = 3000;
http.listen(port, () => {
    console.log('Server works on port %d', port);
});