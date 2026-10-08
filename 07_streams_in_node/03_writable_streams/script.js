import fs from 'node:fs'
console.time("stream")
 const stream = fs.createReadStream("D:\\movies\\rrr.mkv", {highWaterMark: 16 * 1024})

 const WriteStream = fs.createWriteStream("rrr.mp4")

 stream.on("data", (chunk) => {
   const isEmpty  =  WriteStream.write(chunk)
   if(!isEmpty){
      stream.pause()
   }
 })

 WriteStream.on("drain" ,  () => {
   stream.resume()
 })
 console.timeEnd("stream")
//  stream.write("abc")