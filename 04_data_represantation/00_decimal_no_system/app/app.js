const degits = [2,4,6,5]
const num = [7,3,'a']
 const octal = 0o4526
 const hexaDecimal = 0x843
 const binary = 0b11
const array = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000
const numbers = 7 * 1 + 3* 10 + 2* 100
// console.log(numbers)//
// console.log(octal)
 toString('4526', 8)  // octal > decimal
 //console.log(parseInt('0xfff', 16))  // hexadecimal > decimal
 //console.log(parseInt('0xafc', 16))  // hexadecimal > decimal
function degitToNumber(degit){
  let num  = 0
  for (let i = 0; i < degit.length; i++) {
      let value 
      switch (degit[i]) {
       case 'a':
           value = 10
           break;
       case 'b':
           value = 11
           break
       case 'c':
           value = 12
           break
       case 'd' : 
       value = 13
           break
       case 'e' :
       value = 14
           break
       case 'f' :
        value = 15
           break
       default:
        value =  Number(degit[i])
           break;
      }
      num += value * Math.pow(10 , i);
}
console.log(num)
return num
  
}
degitToNumber(num)
