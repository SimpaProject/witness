/* jslint node: true */

'use strict';

exports.port = null;
// exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 2400;

exports.storage = 'sqlite';


exports.initial_witnesses = [
    '2OY57MQYKZSFDJXLDUFDEMNK7TMMBL5L',
    'J72HTGBVYZPEHMXLCPBJHH4OHZRASU2H',
    'L4XM66D4XJM7XKVOMSMDCZ5SJDWTLAVG',
    'QLQSJ4VMDHF5YD4VBVKMQ2XTATQS735Q',
    'WCKDY6NUPSTKA2UYBW5WFIZNPJ6VA2LG',
    'YHVFZ7IMRM7FZAVJ2YRJVIWSJEN5O7HB'
];

exports.initial_peers = [
    'wss://hub.dagcoin.link'
];

console.log('finished explorer conf');
