import fs from 'fs';


const writeStrem = fs.createWriteStream('number-stream.txt')
console.time()  
// 12.889s = 5000 , 57.197s = 100000
// for(let i = 1; i <= 100000; i++) {
//  if(i === 1){
//     fs.writeFileSync('number.txt', `${i}/n`)
//  }else{
//        fs.appendFileSync('number.txt',  `${i}\n` )
//  }
   
// }

// console.timeEnd()


// 1.592s
for(let i = 1; i <= 100000; i++) {
    writeStrem.write(`${i}\n`)
  
}
        writeStrem.end()

writeStrem.on('finish', () => {
console.timeEnd()
})
