import { Buffer } from 'buffer'
import fs from 'node:fs/promises';

// const a  = Buffer.from('अ')
// const nodeBuffer = Buffer.alloc("अ")
const a  = Buffer.from('hellow wolrd')
const b = Buffer.from("abc")

// nodeBuffer[0] =  98;
// nodeBuffer[7] = 101;

// fs.writeFile('text.tx', nodeBuffer);
// console.log(a.subarray('5').toString("utf-8"))  //hello 5 word (-5)
// console.log(b.copy(a,0,0,5))
// console.log(b.includes("a"))
// console.log(a.readInt8())
console.log(b.write('0x64'))
