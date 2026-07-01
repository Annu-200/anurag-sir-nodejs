import { createReadStream, createWriteStream, read } from "node:fs";
import net from "node:net";

// process.stdin.on("data" , (input) => {
//     console.log(input.toString())
//     const inputStr  = input.toString()
//     const [clientIndex] = inputStr.split("")
//     console.log(clientIndex)
//     if(typeof parseInt(clientIndex) === "number"){
//       clientList[parseInt(clientIndex)].write(inputStr.substring(1)) 
//     }else{
//         clientList.forEach((socket) => {
//             socket.write(input)
//         })
//     }


// } )

// process.stdin.on('data' , (input) => {
//  const command = input.toString().trim()
//  const [cmd , fileName] = command.split("")

//  if(inputStr === "send-"){
//   console.log("command:",command)
//   const readStream = createReadStream(fileName)
//   readStream.pipe(Socket)
//   console.log("fileName:" , fileName)

//  }else{
//     console.log("unkowncommand")
//  }
// })
const clientList = []

const server = net.createServer((Socket) =>{
    clientList.push(Socket)
   console.log(clientList.length)
   const writeStream = createWriteStream("new.png")

    // const writeStrem = createWriteStream("chat.mp4")
    //    Socket.pipe(writeStrem)
    // const readStrem = createReadStream("chat.mp4")
    // readStrem.pipe(Socket)
        console.log("got message!")

    Socket.on("data", (chunk) => {
   writeStream.write(chunk)

        clientList.forEach((client) => {
        if(client !== Socket){
            client.write(chunk)
           console.log(Socket.remotePort)
            // chunk.pipe(writeStream)
        }
   });
    })
     Socket.on('error' , () => {
        console.log("client Lost")
    })
    Socket.on("close", () => {
    console.log('client disconnected' , Socket.remoteAddress, Socket.remotePort)
    })
  
    console.log("client connected" , Socket.remoteAddress , Socket.remotePort) 
})
server.listen(4000,"0.0.0.0", () =>{
    console.log("server start at 4000")
})
 
