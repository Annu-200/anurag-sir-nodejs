import {wordCounter} from './node_modules/counter-words/counter.js'
const fileContent = './file-2.txt'
const prevWord = {
    "hello":1,"hellow":1

}
const result = await wordCounter('./file-2.txt', prevWord)
console.log(result)
// console.log(wordCounter(result))
