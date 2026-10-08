import { createWriteStream } from "fs" 
import  { spawn } from "child_process";





// import fs from 'fs';
// const writeStream = fs.createWriteStream('output.txt')
// process.stdin.pipe(writeStream);



// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)

// process.stdout.write("hi")
const childProcess = spawn("node" , ["childProcess"]);

const writeStrem = createWriteStream("abc.mkv")

// childProcess.stdout.on("data", (chunk) =>{
    // console.log(chunk.toString())
// });


// childProcess.stdin.write("Hellow")
childProcess.stdout.pipe(writeStrem)


