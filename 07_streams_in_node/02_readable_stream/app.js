import fs from 'fs'
// let readfile = 0
const stream = fs.createReadStream('./chars.txt',{highWaterMark: 4});
stream.on('data', (chunk) => {
  readfile++
  if(readfile == 1){
   fs.writeFileSync('./copy.txt', chunk)
  }else{
    fs.appendFileSync('./copy.txt', chunk)
  }
  
   stream.pause()
   setTimeout(() => {
     stream.resume()
   }, 500);
})

stream.on('data', (chunk) => {
    console.log(chunk)
    console.log(stream.readableFlowing)
    console.log(stream.readableEnded)
    stream.isPaused()
})
stream.setEncoding('utf-8')
stream.on('readable', (chunk) => {
  console.log(stream.read())
  
// })
