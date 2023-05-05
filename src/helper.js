import Table from 'cli-table'
import chalk from 'chalk'
import { DEFAULT_COMMAND } from './utils/defaultkey.js'
import GenerateTsProject from './ts/main_ts.js'
import GenerateJsProject from './js/main_js.js'

class Helper {
  // this args is array
  constructor(args, generator) {
    this.args = args
    this.generator = generator

    this.#initialArgs()

    this.#generator()

    this.#errorCommand();
}

  #generator() {
    if (this.generator == "generator" && this.args.length == 0) {
      const table = new Table({
        head: [chalk.yellow('Commands'), chalk.yellow('Description')],
      })

      table.push([chalk.green('generator'), DEFAULT_COMMAND.help])
      table.push([chalk.green('version'), DEFAULT_COMMAND.version])
      table.push([chalk.green('generator ts'), DEFAULT_COMMAND.ts])
      table.push([chalk.green('generator js'), DEFAULT_COMMAND.js])

      console.log(table.toString())
    }
  }

  #initialArgs() {
    if (this.args[0] == 'ts') {
      new GenerateTsProject(this.args.slice(1));
    } else if (this.args[0] == 'js'){
        new GenerateJsProject(this.args.slice(1));
    }
  }

  #errorCommand(){
    if (this.generator !== "generator"){
        console.log("Please use this app after installing it");
    }
  }
}

export default Helper
