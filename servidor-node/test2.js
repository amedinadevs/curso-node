var net = require('net');
var port = 13101;
var host = '192.168.231.114';
var conn = net.createConnection(port ,host);

var num = 0;
var ultimo = -1;

conn.setKeepAlive(true,120000);
conn.on('connect', function() {
      console.log('connected to server');

      setInterval(function(){
            num++;
            conn.write(demo(num, "T017"))
       }, 50);

     });
conn.on('data' , function (data){
      demo2(data)

        });
conn.on('error', function(err) {
      console.log('Error in connection:', err);
      });
conn.on('close', function() {
       console.log('connection got closed, will try to reconnect');
         conn.end();
       });
conn.on('end' , function(){
      console.log('Requested an end to the TCP connection');
       });


function demo(id, tt){
      var xmlMessage =`<message type="2635" MSID="${id}"><che CHID="${tt}" action="B"><position PPOS="01A007"></position></che></message>`;
      //var xmlMessage = `<message type="2635" MSID="6000"><che CHID="T017" action="ProgressUpdate"><position PPOS="10D134"></position></che></message>`
      //var xmlMessage = `<message type="2635" MSID="6365"><che CHID="T075" action="ProgressUpdate"><position PPOS="21A119"></position></che></message>`
      var lon = xmlMessage.length;
      var totalLength = lon + 2;
      //node.warn(totalLength);
      //return msg;

      var LengthHexadecimal = (totalLength).toString(16);
      //node.warn(LengthHexadecimal);
      //return msg;

      var bufferHexadecimal = Buffer.from(LengthHexadecimal, "hex");
      //node.warn(bufferHexadecimal);
      //return msg;

      var startOfMessage =  Buffer.from([0x00,bufferHexadecimal[0]]);//0x50--> 78 en mi ejemplo
      var messageID =  Buffer.from([0x1f,0x41]);


      var message = Buffer.from(xmlMessage, 'utf8');

      var endOfMessage = Buffer.from([0xff]);

      var result = Buffer.concat([startOfMessage, messageID, message, endOfMessage]);

      return result;
}


function demo2(payload){
      var message = payload;
      var answer = message.slice(4, message.length-1);
      var result = answer.toString();
      var id = -2
      var idArr = result.match(/(?<=MSID=")(\d+)(?=")/g)
      
      if (idArr && idArr.length > 0) {
            id = idArr[0]
      }else{
            console.log("ID vacio")
            console.log(result)
      }

      if(ultimo + 1 == id){
           result = "Ok"
      }else{
           // console.log("Se ha saltado")
      }
      ultimo = id
      return result;
}
