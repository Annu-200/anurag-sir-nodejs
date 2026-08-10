 const a  = new ArrayBuffer(4)

 const view = new DataView(a)

view.setInt8(0, 80)
 view.setInt8(1, 0b01010000)
 view.setInt8(2, 0o120)
 view.setInt8(3, 0x50)
console.log(a)
