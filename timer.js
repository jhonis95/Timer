class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        //callbacks is the parameter that have callbacks that allow us to track/notifie outside what is happen in the class
       this.durationInput=durationInput;
       this.startButton=startButton;
       this.pauseButton=pauseButton;
        if(callbacks){
            this.onStart=callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplete=callbacks.onComplete;
        }
       
       this.startButton.addEventListener('click',this.start);
       this.pauseButton.addEventListener('click',this.pause);
    }
    start=()=>{// usind arrow function to define the right reference to "this"
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }        
        this.tick()
        this.interval=setInterval(this.tick,20)//the vareable this.interval now can be use cross methods
    }
    pause=()=>{
        clearInterval(this.interval)
    }
    tick=()=>{
        if(this.timeRemaining<=0){//make sure that our timeRemaining is not bellow 0
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining=this.timeRemaining - 0.02// here we are using get and set
        //set timeRemaining()   get timeRemaining()    
        //get will return the value in float and set will set that value to the input
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }
    get  timeRemaining(){//with get wecan use the method as a value
        return parseFloat(this.durationInput.value)//parseFloat is to transfor the string to a number
    }
    set timeRemaining(time){ //setting the variable
        this.durationInput.value=time.toFixed(2)
    }
}