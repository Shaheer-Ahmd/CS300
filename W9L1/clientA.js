"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
var PORT = 9000;
var socketClient = (0, socket_io_client_1.io)("http://localhost:".concat(PORT));
// url can be ws://localhost:9000
socketClient.connect();
// default 'message' event
socketClient.send('hello from clientA.ts');
socketClient.on('message', function (message) {
    console.log('message from server: ', message);
    // socketClient.send('hello from clientA.ts'); -> infinite loop
});
socketClient.send('customMessage', 'customMessage from clientA.ts');
setTimeout(function () {
    socketClient.close();
}, 5000);
