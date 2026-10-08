import fs from "fs"
import { pipeline } from "stream"

console.time()

const readStrem = fs.createReadStream("D:\\movies\\puss-in-boot.mkv", { highWaterMark: 1 * 1024 * 1024})

const writeStrem = fs.createWriteStream('puss.mkv')


// backpressure 1:01.165
// readStrem.on("data", (chunk) => {
//    const isEmpty = writeStrem.write(chunk)
//    if(!isEmpty){
//     readStrem.pause()
//    }  
// })
// writeStrem.on("drain", () => {
//     readStrem.resume()
// })

// readStrem.pipe(writeStrem)

// setTimeout(() => {
// readStrem.destroy("Game Over")
// }, 200)

pipeline(readStrem, writeStrem, (err) => {
    console.log(err)
})

setTimeout(() => {
readStrem.destroy("Game Over")
}, 200)

setInterval(() => {
    console.log("hey!")
} , 100)

readStrem.on("end" , () => {
    console.timeEnd()
})
