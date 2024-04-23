
/*
Installations:

npm install http
npm install socket.io
npm install socket.io-client
npm install typescript @types/socket.io
*/
/*
 Topics Covered:
  Messages with acknowledgements.
  Passing data objects.
  Rooms
  Middleware
  Authentication/token
*/



import http from 'http';
import {Server, Socket} from 'socket.io';
import { Employee } from './types18';



const httpServer = http.createServer();
const io = new Server(httpServer);
const PORT = 9000;

let rooms:string[] = ["Undergrads", "Grads"];

/*Middlewares: Functions which are called before 
connection is established.

A middleware function is passed the Socket instance and 
the next registered middleware function.
Multiple middleware functions are executed sequentially.

*/

io.use((socket, next)=> {
    console.log("Middleware-1");
    console.log("TOKEN: ", socket.handshake.auth.token);
    console.log("USER ID: ", socket.handshake.auth.user);
    console.log("PASSWORD: ", socket.handshake.auth.pass);

    next();
    //next(new Error("Authentication Failed"));
});

io.use((socket, next)=> {
    console.log("Middleware-2");
    next();
});


io.on('connection', (socket)=> {

    console.log("Client connected: " + socket.id);
    
    if(Math.floor(Math.random()*100) %2 == 0){
        
        socket.join(rooms[0]);
        //Join multiple rooms
        //socket.join(rooms);
        
        socket.send("You joined: " + rooms[0]);
    }
    else
    {
        socket.join(rooms[1]);
        socket.send("You joined: " + rooms[1]);


    }

    

    socket.on('message', (msg)=> {
        console.log("Client says: " + msg);
        socket.send("Welcome");
    });

    socket.on('ack_msg', (msg, f)=> {
        console.log("Client says: " + msg);
        f("ack_msg received on server");
    });

    socket.on('undergrads', (msg)=> {
        console.log("Message for undergrads: " + msg);
        io.to(rooms[0]).emit('message', msg);
        //io.to(rooms[0]).to(rooms[1]).emit('message', msg);
    
    });

    socket.on('grads', (msg)=> {
        console.log("Message for grads: " + msg);
        io.to(rooms[1]).emit('message', msg);
        //io.to(rooms[0]).to(rooms[1]).emit('message', msg);
    
    });

    socket.on('emp', (data)=> {
            let e: Employee = new Employee(data.id, data.name);
            e.display();
    });

    socket.on('disconnect', ()=> {
        console.log("Client disconnected: " + socket.id);
    })

})


httpServer.listen(PORT, ()=> {console.log("server started on port: " + PORT);})