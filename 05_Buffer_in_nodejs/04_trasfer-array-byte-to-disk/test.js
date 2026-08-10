import fs from 'node:fs/promises'
const  uint8array  = new Uint8Array(8)

uint8array[0] = 0x41
uint8array[1] = 0x6e
uint8array[2] = 0x6e
uint8array[3] = 0x75
uint8array[4] = 0x70
uint8array[5] = 0x61
uint8array[6] = 0x77
uint8array[7] = 0x61
uint8array[8] = 0x72

const view = new DataView(uint8array.buffer)
fs.writeFile('buffer-text.txt', view)
// const decoder = new TextDecoder()
// console.log(decoder.decode(uint8array))





