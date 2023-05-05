#!/usr/bin/env node

import path from "path"
import table from "./app.js";
import Helper from "./helper.js";

const generator = path.basename(process.argv.slice(1)[0]);

const args = process.argv.slice(2);

if (generator && args.length == 0){
  console.log(table.toString());
}else {
  new Helper(args);
}