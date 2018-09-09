/* jslint node: true */

'use strict';

exports.port = null;
// exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 24000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
    'DKXEANWQQDYVTWQEJS5MBLMGGQBC5BFT',
    'Z2XQRGHWRCGDWP2DK4PIHXFEIZ3O7PRB'
];

exports.initial_peers = [
    'wss://test-hub.dagcoin.org/spoon/'
];

console.log('finished explorer conf');
