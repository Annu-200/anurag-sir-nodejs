const a = new ArrayBuffer(4)

const view = new DataView(a)

// view.setInt16(0, 257)
// console.log(view.getInt16(0))
// view.setInt16(2, 260)
view.setInt32(0, 0x76a84545)
console.log(a)
// console.log()
console.log(view.getInt8(0))
