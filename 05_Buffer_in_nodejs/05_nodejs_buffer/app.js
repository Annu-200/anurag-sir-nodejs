import { Buffer } from 'buffer'

// const buf = new ArrayBuffer(4)
// const uint8Buffer = new Uint8Array(buf)


// uint8Buffer[0] = 97
// uint8Buffer[1] = 96
// uint8Buffer[2] = 79
// uint8Buffer[3] = 63
// console.log(nodebuffer.buffer === uint8Buffer.buffer)
// console.log(ArrayBuffer.buffer)

const nodebuffer =  Buffer.from([97, 98 , 99, 100])
const nodebuffer1 =  Buffer.alloc(4) 
const nodebuffer2 =  Buffer.allocUnsafe(4)

// console.log(nodebuffer.toString('utf-8'))
console.log(nodebuffer.buffer.byteLength)
console.log(nodebuffer1.buffer.byteLength)
console.log(nodebuffer2.buffer.byteLength)
