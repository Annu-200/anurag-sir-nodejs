import fs  from "node:fs/promises"


// const dataSource =  await fs.readFile('file-1.txt', 'utf-8')

// const date =  

setInterval(() => {
 fs.writeFile('file-1.txt',new Date().toLocaleTimeString())
    
}, 500);

try{
 await fs.readFile("nodejs", 'utf-8')
}catch(error){
    
    await fs.writeFile("error.log",`${new Date().toLocaleTimeString()}\n${error.message}\n${error.stack}`)
}
