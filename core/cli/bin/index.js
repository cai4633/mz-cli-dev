#!/usr/bin/env node

const importLocal = require('import-local');
const npmLog = require('npmlog');

if(importLocal(__filename)) {
  npmLog.info('cli', 'It is using local package!')
} else {
  require('../lib')(process.argv.slice(2));
}
