var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

// for everyone
// io.emit('some event', { for: 'everyone' });

// for everyone except a socket
// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });

// for everyone including the sender
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
