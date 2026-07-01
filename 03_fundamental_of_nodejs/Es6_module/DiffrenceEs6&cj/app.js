// console.log('running app.js')

// import script from './script.js'
( async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com')

    console.log(response)
})()
