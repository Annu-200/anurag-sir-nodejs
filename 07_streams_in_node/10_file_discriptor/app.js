import fs from "fs";

// console.log(process.stdin.fd) // 0
// console.log(process.stdout.fd) // 1
// console.log(process.stderr.fd) // 2


// fs.open('text.txt', (err, fd) => {
//    console.log(fd)
// })

const fd = fs.openSync("text.txt", "w") // file descriptor



// const fd1 = fs.openSync("package.json")
//read By fileDiscriptor

// fs.read(fd, {buffer: readBuffer} ,(err, bytesRead, buffData) => {
//     console.log(bytesRead)
//     console.log(buffData.toString())
//     console.log(buffData)
// })
// console.log({fd , fd1 })

// fs.writeSync(fd, "Write by fd method") 

//task 
console.time()
// for(let i = 1; i <= 100000; i++ ){
//   fs.writeSync(fd,`${i}\n` ) // 23.636s

// }
// for(let i = 1; i <= 100000; i++ ){
//   fs.write(fd,`${i}\n`, (err, byteWritten , writtenData) => {
//     if (err) throw err;
//     if(i === 100000){
//     console.timeEnd()

//     }
//   } ) // 

// }



fs.close(fd)
// fs.write(fd, "abcdefghijklmnop" , (err, byteWritten, writtenData) => {
//     console.log(byteWritten)
// })
