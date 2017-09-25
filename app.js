'use strict';

const five = require('johnny-five');
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 5500});

wss.on('connection', (ws) => {
    ws.on('open', () => {
        ws.send('connected');
    });
    ws.on('close', () => {
    });
    ws.on('message', (stateID) => {
        nowLED = stateID;
        ws.send(`The StateID is ${nowLED}`);
    });
});

const board = new five.Board();

board.on('ready', () => {
    

});
