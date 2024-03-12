import * as http from 'http';
import {Server} from 'socket.io';

const httpServer = http.createServer();
const io = new Server(httpServer);
// If Server() is not passed any arguments, it will create a new http server for you. If you already have an http server, you can pass it as an argument to Server().

// I need to know if a client connects to the server
io.on('connection', (socket) => {
    console.log('client connected. Socket: ', socket.id);
    socket.broadcast.emit('message', "Listen my slaves, another slave has arrived");

    socket.on('message', (message) => {
        console.log('message: ', message);
        socket.emit('message', `echo: ${message}`);
    });

    socket.on('customMessage', (message) => {
        console.log('customMessage: ', message);
        socket.emit('customMessage', `echo: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('client disconnected', socket.id);
    });
});



const PORT = 9000;
httpServer.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

// this will also work for socket protocol, when we use sockets, it first handshakes with http protocol and then upgrades to socket protocol

// can also do io.listen
// First http server is made, then socket io upgrades it to socket protocol

