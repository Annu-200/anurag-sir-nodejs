a import fs from 'fs/promises';  

const proCdr = new Uint8Array(8)
// procoder
proCdr[0] = 0x50   //p
proCdr[1] = 0x72   //r
proCdr[2] = 0x6f   //o
proCdr[3] = 0x63   //c
proCdr[4] = 0x6f   //o
proCdr[5] = 0x64   //d
proCdr[6] = 0x65   //e
proCdr[7] = 0x72   //r

// console.log(proCdr)

// const decoder = new TextDecoder('utf-16')
//   console.log(decoder.decode(proCdr))
const view = new DataView(proCdr.buffer)
console.log(view)
 fs.writeFile('buffer-text.txt', view)
