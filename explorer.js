/* jslint node: true */

'use strict';

require('./relay');
const conf = require('core/conf.js');
const eventBus = require('core/event_bus.js');
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const ws = require('./controllers/ws');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => { res.sendFile(`${__dirname}/views/index.html`); });

eventBus.on('new_joint', () => { io.sockets.emit('update'); });

io.on('connection', (socket) => {
    socket.on('start', ws.start);
    socket.on('next', ws.next);
    socket.on('prev', ws.prev);
    socket.on('new', ws.newUnits);
    socket.on('info', ws.info);
    socket.on('highlightNode', ws.highlightNode);
    socket.on('nextPageTransactions', ws.nextPageTransactions);
});

server.listen(conf.webPort);
