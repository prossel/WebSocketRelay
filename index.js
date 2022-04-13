const express = require('express');
const { createServer } = require('http');
const WebSocket = require('ws')

const app = express();

const server = createServer(app);
const wss = new WebSocket.Server({ server });

console.log("PORT", process.env.PORT);
let port = process.env.PORT || 8080; // !== undefined ? process.env.PORT : 3000;

wss.on('connection', function(ws) {
  console.log("client joined.");

  // send "hello world" interval
  //const textInterval = setInterval(() => ws.send("hello world!"), 1000);
  ws.send("Hello world");

  // send random bytes interval
  //const binaryInterval = setInterval(() => ws.send(crypto.randomBytes(8).buffer), 110);

  ws.on('message', function(data, isBinary) {
    // console.log("isBinary: " + isBinary);
    //if (typeof(data) === "string") {
    if (!isBinary) {
      // client sent a string
      console.log("string received from client -> '" + data + "'");
    } else {
      console.log("binary received from client -> " + Array.from(data).join(", ") + "");
    }

     // forward message to all clients (including emitter)
     wss.clients.forEach(function each(client) {
       if (client.readyState === WebSocket.OPEN) {
         client.send(data, { binary: isBinary });
       }
     });
  });

  ws.on('close', function() {
    console.log("client left.");
    //clearInterval(textInterval);
    //clearInterval(binaryInterval);
  });
});

server.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});

