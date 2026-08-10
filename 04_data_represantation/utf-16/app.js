import fs from "fs/promises"

const bufferData = await fs.readFile("text.txt")

console.log(bufferData.toString('utf-8'))

const buf = Buffer.from([
    72,101,108,108,111,32,
    87,111,114,108,100
    ]);

 function bufferToString(buffer){
    let buf = " "
    for (let i = 0; i < buffer.length; i++) {
     buf += String.fromCharCode(buffer[i]);
        
    }
    return buf
 }

// console.log( bufferToString(buf))

console.dir(String)
