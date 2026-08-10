// const a = new  ArrayBuffer(4)
// const uInt8 = new Uint8Array(a)
// const uInt32 = new  Uint32Array(a)

// console.log(uInt8)
// console.log(uInt32)

// const uInt8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff)

// console.log(uInt8Array.buffer)

const a  = new ArrayBuffer(4)
a.resize(5)
// const b = a.transfer()

console.log(a)
