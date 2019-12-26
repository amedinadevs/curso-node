var net = require('net');
var server = net.createServer();
var sockets = [];
var num = 0
server.on('connection', function(socket) {
      console.log('got a new connection');
         sockets.push(socket);
    socket.on('data', function(data) {



    setInterval(function(){
        socket.write("Fiesta " + ++num);
   }, 500);

  


   });

    socket.on('close', function() {
         console.log('connection closed');
          var index = sockets.indexOf(socket);
              sockets.splice(index, 1);
             });
      });
server.on('error', function(err) {
         console.log('Server error:', err.message);
        });
server.on('close', function() {
        console.log('Server closed');
      });
server.listen(13101);