const packages = [
    "add", "express",
    "dotenv", "cors",
    "morgan", "jsonwebtoken",
    "joi", "bcrypt",
    "cookie-parser",
]

const packageTypes = [
    "add", "-D",
    "typescript", "ts-node-dev",
    "@types/express", "@types/node",
    "@types/cors", "@types/jsonwebtoken",
    "@types/morgan", "@types/bcrypt"
]

const folderStructure = [
    "controller",
    "middlewares",
    "errors",
    "model",
    "routes",
    "service",
    "utils",
    "config",
    "types",
]

const fileStructure = {
    "app.ts": "",
    "server.ts": "",
    "config/db_connect.ts": ""
}

export { packages, packageTypes, folderStructure, fileStructure }