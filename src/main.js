#!/usr/bin/env node

import path from 'path'
import Helper from './helper.js'

const generator = path.basename(process.argv.slice(1)[0]) 

const args = process.argv.slice(2)

new Helper(args, generator)