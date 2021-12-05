var sec = 0;
var min = 0;
var hour = 0;
function start() {
    setInterval(startWatch,1000);
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