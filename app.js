'use strict';

const five = require('johnny-five');
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 5500});
const board = new five.Board();

board.on('ready', () => {
    const servo = new five.Servo({
      pin: 10,
      startAt: 0
    });
    wss.on('connection', (ws) => {
        ws.on('open', () => {
            ws.send('connected! I will Home Position.');
            servo.home();
        });
        ws.on('close', () => {
        });
        ws.on('message', (degrees) => {
            servo.to(parseInt(degrees));
            ws.send(`I will turn ${degrees} digrees.`);
        });
    });
});
