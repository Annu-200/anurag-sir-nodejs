class MyEventEmittr {
  constructor() {
    this._events = {}
  }
  on(eventName , handler){
    if(this._events[eventName]){
        this._events[eventName].push(handler);
    }else{
        this._events[eventName] = [handler]
    }
  }
  
  once(eventName , handler){
   const wrapper =  (...args) => {
       handler(...args)
       this._events[eventName] = this._events[eventName]?.filter(fun => fun !== wrapper)
    }
    this.on(eventName, wrapper)
  }

  emit(eventName, ...args){
    this._events[eventName]?.forEach((event) => {
        event(...args);
    });
  }
}

const emitter = new  MyEventEmittr()

emitter.on("clap", () => {
    console.log(" light off ")
})
emitter.once("jump", () => {
    console.log("Dance on the floor")
})
emitter.emit("clap")
emitter.emit("jump")
emitter.emit("jump")

