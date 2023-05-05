import { spawn } from 'child_process'

class GenerateJsProject {
    // get currentpath

    constructor(args) {
        this.args = args
        this.#create();
    }

    #create() {
        console.log(this.args);
    }

}

export default GenerateJsProject 
