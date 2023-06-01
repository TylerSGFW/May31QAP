const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

class myEmitter extends EventEmitter {};
const myEvent = new myEmitter();
myEvent.on('route', (route) => {
    console.log("Serving route" + route);
});
myEvent.on('error', (error) => {
    console.log(error);
});
const server = http.createServer((req, response) => {
    let url = req.url;
    switch (req.url) {
        case '/routeone':
            fs.readFile('./views/routeone.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("sample text #1");
            break;
        case '/routetwo':
            fs.readFile('./views/routetwo.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("sample text #2");
            break;
        case '/routethree':
            fs.readFile('./views/routethree.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("sample text #3");
            break;
        case '/routefour':
            fs.readFile('./views/routefour.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("sample text #4");
            break;
        case '/routefive':
            fs.readFile('./views/routefive.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("sample text #5");
            break;
        case '/favicon.ico':
            console.log("");
            break;
        default:
            fs.readFile('./views/404.html', function(error, data) {
                if (error) {
                    myEvent.emit("Error", + error)
                } else {
                myEvent.emit('route', url);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                };
            });
            console.log("you know there's been many times i've thought of putting stupid jokes into my qaps but so far i haven't actually done it");
    }
})

server.listen(3000, 'localhost', () => {
    console.log("Listening on port 3000")
});