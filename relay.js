/* jslint node: true */

'use strict';

const conf = require('core/conf.js');
const myWitnesses = require('core/my_witnesses.js');


function replaceConsoleLog() {
    const clog = console.log;
    console.log = function () {
        Array.prototype.unshift.call(arguments, `${Date().toString()}:`);
        clog(null, arguments);
	};
}

function start() {
    console.log('starting');
    const network = require('core/network.js');
    if (conf.initial_peers) {
        conf.initial_peers.forEach((url) => {
        network.findOutboundPeerOrConnect(url);
    });
}
}

replaceConsoleLog();
myWitnesses.readMyWitnesses((arrWitnesses) => {
    if (arrWitnesses.length > 0) {
        return start();
    }
    console.log('will init witnesses', conf.initial_witnesses);
    myWitnesses.insertWitnesses(conf.initial_witnesses, start);
}, 'ignore');
