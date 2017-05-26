#!/usr/bin/env node
'use strict';
const program = require("commander");

program
  .command('app', 'manage applications')
  .command('service', 'manage application services')
  .command('image', 'manage images')
  .command('container', 'manage containers')
  .command('volume', 'manage volumes')
  .parse(process.argv);
