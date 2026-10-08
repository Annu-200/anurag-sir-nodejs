import fs  from 'fs';

const writeStrem = fs.createWriteStream('file.txt', {heighWaterMark: 4});

// writeStrem.end('Hello World');
writeStrem.cork();

//  how write stream  write data
//  writeStrem.on('drain' , () => {

//  for (let i = 0; i <= 1000; i++) {
//     console.log(writeStrem.writableLength);
//     const isEmpty = writeStrem.write('a');
//       console.log(isEmpty)
//     if(!isEmpty){
//      break;
//     }
    
// }
//  })

// setTimeout(() => {
//     console.log(writeStrem.writableLength)
// }, 10)
