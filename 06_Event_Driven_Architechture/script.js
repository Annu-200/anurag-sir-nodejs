import eventEmitter from "node:events";

const emitter = new eventEmitter();
console.log(emitter);



emitter.on('anu' , () => {
    console.log("annu is the best coder")
});
emitter.on('anushka' , () => {
    console.log("anushka is the greate")
});
emitter.once('anu' , () => {
    console.log("annu is a laravel developer")
});

emitter.emit('anu');
emitter.emit('anu');
emitter.emit('anu');

emitter.emit('anushka');
