import { appendFile, watch } from 'node:fs'
import { rename , copyFile, cp , writeFile,
   readFile, stat,
} from 'node:fs/promises'

//   copyFile("text.txt", "A:\\Downloads\\category\\hellow.txt")
//   copyFile("women.jpg", "hellow.jpg")
//    cp("./src","A:\\Downloads\\category\\product\\src", { recursive:true })
//   rename("women's category.jpg", "women.jpg")
//  writeFile('style.css',"color:red")

  // const file = await  readFile("women.jpg", 'binary')
  // console.log(file)
//  setInterval(() => {
//   writeFile('./text.txt', new Date().toLocaleTimeString())  
//  }, 500);  
// const build = await  stat('app.js') file detail size time atime redve

// console.log(build)

watch('txt.txt', async (eventType, filename) => {
  console.log(await readFile('txt.txt', 'utf-8'));
  
});                         
