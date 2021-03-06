/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

var client = new net.Socket({allowHalfOpen:true,readable:true,writable:true});

client.connect(13101, '192.168.231.114', function() {
//client.connect(8999, '127.0.0.1', function() {
	console.log('Connected');
	//client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    var data_convert = Buffer.from(data).toString()
    console.log('Received toString: ' + data_convert);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});