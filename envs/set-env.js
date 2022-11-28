const fs = require("fs");
const selectedEnvironment = process.argv[2];

const envFileContent = require(`./${selectedEnvironment}.json`);
fs.writeFileSync("env.json", JSON.stringify(envFileContent, undefined, 2));