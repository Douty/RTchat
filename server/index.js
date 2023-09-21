import express from 'express';
import {Server} from 'socket.io';
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log(`User:${socket.id} just connected`);



   

    socket.on('messageSent',(textData)=>{
        textData.receiver = 'sent';
        io.to(textData.roomId).emit('messageRecieved',textData); 
    })

    socket.on("disconnect", ()=>{
        socket.emit('user')
    })
    

    
});

server.listen(5000, ()=>{
    console.log('Listening on port 5000');
    
    
})