"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var socket_io_1 = require("socket.io");
var httpServer = http.createServer();
var io = new socket_io_1.Server(httpServer);
// If Server() is not passed any arguments, it will create a new http server for you. If you already have an http server, you can pass it as an argument to Server().
// I need to know if a client connects to the server
io.on('connection', function (socket) {
    console.log('client connected. Socket: ', socket.id);
    socket.broadcast.emit('message', "Listen my slaves, another slave has arrived");
    socket.on('message', function (message) {
        console.log('message: ', message);
        socket.emit('message', "echo: ".concat(message));
    });
    socket.on('customMessage', function (message) {
        console.log('customMessage: ', message);
        socket.emit('customMessage', "echo: ".concat(message));
    });
    socket.on('disconnect', function () {
        console.log('client disconnected', socket.id);
    });
});
var PORT = 9000;
httpServer.listen(PORT, function () {
    console.log("server listening on port ".concat(PORT));
});
// this will also work for socket protocol, when we use sockets, it first handshakes with http protocol and then upgrades to socket protocol
// can also do io.listen
// First http server is made, then socket io upgrades it to socket protocol
