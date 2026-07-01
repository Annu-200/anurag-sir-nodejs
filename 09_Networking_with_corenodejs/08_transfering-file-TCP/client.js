

import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";
// make sure ip address before seting connection form host
const socket = net.createConnection({ host:"192.168.0.104", port:4000 })

process.stdin.on("data", (input) => {
//    socket.write(input.toString())
const  command = input.toString().trim()
// const [cmd , fileName] = command.split(" ")
const firstSpace = command.indexOf(" ")
const cmd = command.slice(0, firstSpace)
const fileName = command.slice(firstSpace + 1)
const isFile = cmd.startsWith("send-file")

console.log("command:", command);
console.log("cmd:", cmd);
console.log("fileName:", fileName);

    if(isFile){
        // "D:\\LEARNING\\Recording chating app.mp4"
       const readStream = createReadStream(fileName)
        readStream.pipe(socket)

        readStream.on("end" , () => {
         console.log("file send")
        })
    }
    
})

// const readStream =
socket.on("data", (chunk) => {
    
const writeStrem = createWriteStream("receive.png")
// socket.pipe(writeStrem)
writeStrem.write(chunk)
console.log("file recevie successfully")
})

// setTimeout(() => {
//     socket.write("hlo")
//     // socket.end()
// }, 2000)

socket.on("error" , () => {
    console.log("server disconnected")
})