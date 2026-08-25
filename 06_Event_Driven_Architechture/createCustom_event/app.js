class myEventEmitter  {
    constructor(){
        this._event ={}
    }
       on(eventName , handler){
        if(this._event[eventName]){
            this._event[eventName].push(handler)
        }else{
            this._event[eventName] = [handler]
        }
    }

        emit(eventName){
             this._event[eventName]?.forEach((event) => {
                event();
            });
        }
        once(eventName, handler){
          const wrapper = () => {
            handler();
            this.off(eventName, wrapper);
          }
          this.on(eventName, wrapper);
        }
        off(eventName, handler){
            if(this._event[eventName]){
                this._event[eventName] =  this._event[eventName].filter(h => h  !== handler)
            }
        }
    }

    const emitter = new myEventEmitter()

   
    console.log("Emit 'xyz' first time:");
emitter.emit("xyz"); // Should call both xyz handlers

console.log("\nEmit 'a' first time:");
emitter.emit("a"); // Should call 'a' handler once

console.log("\nEmit 'a' second time:");
emitter.emit("a"); // Should NOT call 'a' handler again

console.log("\nEmit 'xyz' second time:");
emitter.emit("xyz"); // Should call both xyz handlers again
    
