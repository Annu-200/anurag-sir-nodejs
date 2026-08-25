import { Buffer } from 'buffer'

const buffer = Buffer.alloc(5000)
const buffer2 = Buffer.allocUnsafe(4095)
const a = Buffer.allocUnsafe(4095)
const d = Buffer.from("abc")

buffer2[0] = 92
a[0] = 101

console.log(buffer.buffer)
console.log(buffer2.buffer)
console.log(a.buffer)
console.log("end")


