import { spawn } from 'child_process'
import fs from "fs";

class GenerateTsProject {
    // get currentpath

    constructor(args) {
        this.args = args
        this.#create();
    }

    #create() {
        if (this.args.length == 0) {
            const currentPath = process.cwd() + "/Ts-project";
            if (!fs.existsSync(currentPath)) {
                try {
                    fs.mkdirSync(currentPath)

                    process.chdir(currentPath);

                    const pnpmInit = spawn("pnpm", ["init"], { stdio: 'inherit' })
                    return;
                } catch (error) {
                    console.log(error.message);
                }
            };
            return console.log("This file already opened! fileName Ts-ptoject");
        }
    }

}

export default GenerateTsProject 
