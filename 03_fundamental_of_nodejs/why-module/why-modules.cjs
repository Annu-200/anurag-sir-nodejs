function sum(...num){
    return num.reduce((curr , acc) => curr + acc)
}
function Into(...num){
    return num.reduce((curr , acc) => curr * acc)
}

// console.log((sum(35 , 2)));
exports = {
    sum,
    Into
}