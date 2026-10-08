import fs from 'fs'

const writeStream = fs.createWriteStream("file.txt", {highWaterMark: 16 * 1024 * 1024})

// writeStream.write("a")
// writeStream.write("a")
// writeStream.write("a")
// writeStream.write("a")

// // writeStream.on("open", (fd) => {
//     // console.log("open" , fd)
// // })
// writeStream.end()
// // writeStream.write("a") it's through error if we call write() method after end()

// writeStream.on("finish", () => {
//     console.log("finish")
// })

//    State in writable Stream

writeStream.cork()

writeStream.write("a")
writeStream.write("a")
writeStream.write("a")
writeStream.write("a")

console.log(writeStream.writableCorked);
writeStream.uncork()
console.log(writeStream.writableCorked);

