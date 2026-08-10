import { Buffer } from "buffer"

// import { buffer } from "node:stream/consumers"



const nodeBuffer =  Buffer.alloc(4)
const nodeBuffer2 =  Buffer.allocUnsafe(4)
const nodeBuffer3 =  Buffer.from([97, 98 , 99, 100])

const uint8Array =  new Uint8Array(4) 

uint8Array[0] = 98
uint8Array[1] = 99
uint8Array[2] = 100
uint8Array[3] = 101



console.log(nodeBuffer.buffer.byteLength , "node alloc")
console.log(nodeBuffer2.buffer.byteLength, "alloc unsage")
console.log(nodeBuffer3.buffer.byteLength, "from")


console.log(uint8Array.buffer.byteLength)
