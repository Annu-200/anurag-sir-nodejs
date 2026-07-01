import {readFile} from 'node:fs/promises';


const filePath = process.argv[2]
const words = await readFile(filePath,'utf-8')


const wordArray  = words.split(/[\W]/).filter((word) => word)

const wordCount = {}

wordArray.forEach((words) =>{
    if(words in wordCount ){
       wordCount[words] +=1
    }else{
        wordCount[words] = 1
    }
})



