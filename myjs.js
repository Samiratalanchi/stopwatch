var sec = 0;
var min = 0;
var hour = 0;
function start() {
    x=setInterval(startWatch,1000);
    document.getElementById("timer").style.color="black";
}
function startWatch() {
    sec++;
    if(sec<10 || sec==0) {
        sec = "0" + parseInt(sec);
    } else if(sec==60) {
        min++;
        sec="00";
    }
    if(min<10 || min==0) {
        min = "0" + parseInt(min);
    } else if(min==60) {
        hour++;
        min="00";
    }
    if(hour<10 || hour==0){
       hour = "0" + parseInt(hour); 
    }
    document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec; 
}
function stop() {
    clearInterval(x);
    document.getElementById("timer").style.color="red";
}
function reset() {
    clearInterval(x);
    document.getElementById("timer").style.color="black";
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById("timer").innerHTML = "00:00:00"; 
}