const arrayBuffer = new ArrayBuffer(4)

arrayBuffer[0] = 97
arrayBuffer[1] = 98
arrayBuffer[2] = 99
arrayBuffer[3] = 100


fetch('http://localhost:3000', {
    method:"GET",
    data:"abd"
}).then((resp) => resp.text()).then(data => console.log(data))