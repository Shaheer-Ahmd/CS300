import {io} from 'socket.io-client';

const PORT = 9000;
const socketClient = io(`http://localhost:${PORT}`);
// url can be ws://localhost:9000

socketClient.connect();

// default 'message' event
socketClient.send('hello from clientA.ts');

socketClient.on('message', (message) => {
    console.log('message from server: ', message);
    // socketClient.send('hello from clientA.ts'); -> infinite loop
});

// unregistering the event listener
socketClient.off('message');

socketClient.send('customMessage', 'customMessage from clientA.ts');

setTimeout(() => {
    socketClient.close();
}, 5000);