const durationInput=document.getElementById("duration")
const startButton=document.getElementById("start")
const pauseButton=document.getElementById("pause")

const timer= new Timer(durationInput,startButton,pauseButton,{
    onStart(){
        console.log("Time started")
    },
    onTick(){
        console.log("Timer just ticked down")
    },
    onComplete(){  
        console.log("Timer is completed")
    }
})
