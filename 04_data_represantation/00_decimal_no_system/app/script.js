const data = [2,4,6,5]
const data2 = [7,3,2]

const num =  2*1 + 4* 10 + 6*100 + 5* 1000
const num2 = 7* Math.pow(10, 1) + 3 * Math.pow(10, 2) + 2 * Math.pow(10, 3)

// console.log(num)
// console.log(num2)
function digitCount (digits){
 let num = 0
 digits.forEach((degit , index, redex = 10) => { 
    switch (degit = "a") {
        case degit: 10
            
            break;
    
        default:
            break;
    }
 num += degit * Math.pow(redex, index) 
})
 return num
    
}
console.log(digitCount(data))
console.log(digitCount(data2))