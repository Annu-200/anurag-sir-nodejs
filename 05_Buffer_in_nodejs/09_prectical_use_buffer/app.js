// import fs from 'fs/promises'

//  const buf = await  fs.readFile("A:\\Downloads\\men.jpg")
//  console.log(buf.byteLength)

const a = new ArrayBuffer(4)
const uInt8Array = new Uint8Array(a)

uInt8Array[0] = 97
uInt8Array[1] = 98
uInt8Array[2] = 99
uInt8Array[3] = 100

fetch('http://localhost:3000/',
    {   
        method : "POST",
        body : uInt8Array
    }
).then((resp) => resp.text()).then((data) => console.log(data))

