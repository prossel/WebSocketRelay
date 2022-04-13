# WebSocketRelay
Simple WebSocket relay server for node.js

This is made to be hosted on https://www.alwaysdata.com 

Code may need to be adjusted to work with other hosts (especially the PORT to use), but there is a fallback to port 8080.

## Installation

* Install node.js and npm
* git clone https://github.com/prossel/WebSocketRelay.git
* cd WebSocketRelay
* npm install

## Run the server from the shell
* node index.js

## Configure a site to run the Node.js app

* Create a site in Alwaysdata admin
* Select Node.js
* Configure the node command to start the Node.js app as:

```shell
    node $HOME/WebSocketRelay/index.js 
```
