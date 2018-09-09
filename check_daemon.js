/* jslint node: true */

'use strict';

const checkDaemon = require('core/check_daemon.js');

checkDaemon.checkDaemonAndRestart('node explorer.js', 'node explorer.js > log');