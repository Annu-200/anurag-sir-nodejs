import { watch } from 'node:fs'
import {copyFile, rename, cp, rm, rmdir, writeFile, mkdir, readFile} from 'node:fs/promises'


//  cp("./src" , "D:\\Annu-Downloads\\extra space\\Desktop\\src", {recursive:true})
// rename("./women.jpg", "./src/women.jpg") // move file in folder

// rename("./script.js", "app.js") // rename file 

//  copyFile("paper.txt", "D:\\Annu-Downloads\\extra space\\Desktop\\paper.txt") //copyfile


// rm("test", {recursive:true})
// mkdir("test")
watch('paper.txt', async (eventType , filename)=>{
 if(eventType == "change"){

     console.log( await readFile('paper.txt', 'utf-8'))
 }
})

//  console.log("file copy")
