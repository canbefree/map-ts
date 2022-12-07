import { readFileSync } from "fs";
import { exit } from "process";

let data: Buffer
try {
    data = readFileSync("./env.json")
} catch (err) {
    console.log(err)
    exit()
}
let envconfig = JSON.parse(data.toString())

export default {
    key: envconfig.key,
    jscode: envconfig.jscode,
}
