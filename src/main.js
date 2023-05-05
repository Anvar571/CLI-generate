#!/usr/bin/env node

import Table from 'cli-table';
import chalk from 'chalk';
import { DEFAULT_COMMAND } from './utils/defaultkey.js';

// Create a new table
const table = new Table({
  head: [chalk.yellow('Commands'), chalk.yellow('Description')],

});

// Add some data
table.push([chalk.green('generator'), DEFAULT_COMMAND.help]);
table.push([chalk.green('version'), DEFAULT_COMMAND.version]);
table.push([chalk.green('generator-ts'), DEFAULT_COMMAND.ts]);
table.push([chalk.green('generator-js'), DEFAULT_COMMAND.js]);

// Print the table to the console
console.log(table.toString());
