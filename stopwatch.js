let startbtn=document.getElementById("startbtn")
let resetbtn=document.getElementById("resetbtn")
let stopbtn=document.getElementById("stopbtn")
let timer=document.getElementById("timer")
let min=0
let sec=0
let t;
let is_timer_running=false
startbtn.onclick=function(){
    if (is_timer_running==true){
        return
    }
    is_timer_running=true
    t= setInterval(()=>{
        sec++
        if (sec==60){
            min++
            sec=0
        }
        timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)

    },1000)

}
resetbtn.onclick=function(){
    clearInterval(t)
    min=0
    sec=0
    timer.textContent="00:00"
    is_timer_running=false

}
stopbtn.onclick=function(){
    clearInterval(t)
    is_timer_running=false

}