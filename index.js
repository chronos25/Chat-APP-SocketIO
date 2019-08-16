var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/home',(req,res)=>{
    console.log(__dirname+'/index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
    console.log("User is connected");
    socket.on('disconnect',()=>{
        console.log("User is disconnected ! ");
    })
});
http.listen(3000,()=>{
    console.log("Running at port 3000 ");
})