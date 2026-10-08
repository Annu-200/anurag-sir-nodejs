import { createWriteStream } from "fs" 

const readStrem = createReadStream("D:\\movies\\Dec.m4v")

readStrem.pipe(process.stdout)

// const writeStrem = createWriteStream("output.txt")

// process.stdin.on("data", (chunk) => {
// writeStrem.write(chunk.tostring)
    // 
// })
// console.log("child process")