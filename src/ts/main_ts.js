import { spawnSync } from 'child_process'
import fs from "fs";
import { packages, packageTypes, folderStructure, fileStructure } from './packageList.js';
import { gitignore } from '../utils/defaultkey.js';

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
                    
                    fs.writeFileSync(currentPath+"/README.md", "Ts project structure");
                    
                    fs.writeFileSync(currentPath+"/.gitignore", gitignore.gitignore)

                    fs.writeFileSync(currentPath+"/.env", "");

                    const pnpmInit = spawnSync("pnpm", ["init"], { stdio: 'inherit' });
                    if (pnpmInit.status == 0) {
                        // const db_name = "mongoose"
                        // packages.push(db_name);
                        // spawnSync("pnpm", packages, { stdio: 'inherit' })
                        // spawnSync("pnpm", packageTypes, { stdio: "ignore" })

                        spawnSync("pnpm", ["tsc", "--init"], { stdio: "ignore" });

                        const srcPath = process.cwd() + "/src"
                        if (!fs.existsSync(srcPath)) fs.mkdirSync(srcPath);

                        for (let folder of folderStructure) {

                            fs.mkdirSync(process.cwd() + `/src/${folder}`);
                        }

                        for (let file of Object.entries(fileStructure)) {
                            fs.writeFile(process.cwd() + `/src/${file[0]}`, file[1], "utf-8", (err)=>{
                                if(err) return console.log(err.message);
                            })
                        }
                    }

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
