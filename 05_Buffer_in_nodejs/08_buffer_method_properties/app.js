import { Buffer } from 'buffer'
import fs from 'fs/promises'
 
const nodeBuffer = Buffer.alloc(4)
const nodeBuffer2 = Buffer.from('hellow chinko')

nodeBuffer[0] = 103
nodeBuffer[1] = 105

// fs.writeFile('text.txt', nodeBuffer)
// nodeBuffer.write('abc')
// nodeBuffer.fill(98)
// console.log(nodeBuffer.toString('ascii'))
// console.log(nodeBuffer.toJSON())

// console.log(nodeBuffer2.subarray(5).toString())
// console.log(nodeBuffer2.readInt8(2))
console.log(nodeBuffer2.readInt16BE(3))
console.log(nodeBuffer2.readInt16BE(2))
console.log(nodeBuffer2.readInt16BE(1))
console.log(nodeBuffer2)
console.log('End')
