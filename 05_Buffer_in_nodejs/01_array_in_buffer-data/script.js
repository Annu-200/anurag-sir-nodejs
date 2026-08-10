const a  = new ArrayBuffer(4)
const view = new DataView(a)


const b = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)

const view2 = new DataView(b)

// view.setInt8(0,0b01010000)
// view.setInt8(1,0x50)
// view.setInt8(2,80)
// view.setInt8(3,0o120)


// view.setInt8(0, 0xff)
// console.log(view.getInt8(0))

for (let i = 0; i < view2.byteLength; i++) {
    view2.setInt8( i , i + 1)
}