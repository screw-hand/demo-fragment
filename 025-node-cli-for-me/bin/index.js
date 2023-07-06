#!/usr/bin/env node
const path = require('path');
const minimist = require('minimist');
const help = require(path.join(__dirname, "../src/utils/help.js"));

const args = minimist(process.argv.slice(3));
const module_name = process.argv[2];
const module_params = [...process.argv.slice(3, process.argv.length)];
const last_module_params = module_params[module_params.length-1]

if (last_module_params === 'help' || last_module_params === '--help' || last_module_params === '-h' || !module_name) {
  help(module_name, module_params.slice(0, module_params.length -1));
  process.exit(0);
}

const SRC_DIR = path.join(__dirname, '../src');
try {
  const cur_module = require(path.join(SRC_DIR, module_name));
  cur_module(args)
} catch (error) {
  console.error(error);
  help();
  process.exit(1);
}
