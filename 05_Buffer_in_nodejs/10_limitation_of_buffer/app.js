import fs from 'fs/promises'



  const a = await fs.readFile("D:\\LEARNING\\Screenshot 2023-11-08 135248.png")
  const b = await  fs.readFile("D:\\movies\\4Th Dec.m4v")

  console.log(a.byteLength);
  console.log(b.byteLength);

console.log("End")
