class Timer{
    constructor(durationInput,startButton,pauseButton){
       this.durationInput=durationInput;
       this.startButton=startButton;
       this.pauseButton=pauseButton;

       this.startButton.addEventListener('click',this.start);
       this.pauseButton.addEventListener('click',this.pause);
    }
    start=()=>{// usind arrow function to define the right reference to "this"
        this.tick()
        this.interval=setInterval(this.tick,1000)//the vareable this.interval now can be use cross methods
    }
    pause=()=>{
        clearInterval(this.interval)
    }
    onDurationChange(){

    }
    tick=()=>{
        const timeRmaining=parseFloat(this.durationInput.value)//parseFloat is to transfor the string to a number
        this.durationInput.value=timeRmaining-1;
    }
}
const durationInput=document.getElementById("duration")
const startButton=document.getElementById("start")
const pauseButton=document.getElementById("pause")

const timer= new Timer(durationInput,startButton,pauseButton)
