import {Buffer, constants} from 'buffer'



const alloc = Buffer.alloc(4)
const allocUnsafe = Buffer.allocUnsafe(4)
const b = Buffer.allocUnsafe(4)
const d = Buffer.from('a'.repeat(constants, MAX_STRING_LENGTH))

allocUnsafe[0] = 98
b[1] = 100
console.log(d)

console.log(alloc.buffer.byteLength)
console.log(allocUnsafe.buffer.byteLength)
console.log(b.buffer.byteLength)
