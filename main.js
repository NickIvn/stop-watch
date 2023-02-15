const msec = document.querySelector('.milliseconds');
const sec = document.querySelector('.seconds');
const min = document.querySelector('.minuts');
const hr = document.querySelector('.hours');
let interval;

msec.innerHTML = 0;
if(msec.innerHTML <= 0 && msec.innerHTML <= 9) {
    msec.innerHTML = '0' + msec.innerHTML
   } 
sec.innerHTML = 0;
min.innerHTML = 0;
hr.innerHTML = 0;


document.getElementById('start').addEventListener('click', () => {
    subtractTime();
    interval = setInterval(subtractTime, 1);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    msec.innerHTML = 0;
    sec.innerHTML = 0;
    min.innerHTML = 0;
    hr.innerHTML = 0;
});

function subtractTime() {
        msec.innerHTML++;
    
    if (msec.innerHTML >= 60) {
        sec.innerHTML++;
        msec.innerHTML = msec.innerHTML - 60;
    } 

    if(sec.innerHTML >= 60) {
        min.innerHTML++;
        sec.innerHTML = sec.innerHTML - 60;
    }  

    if(min.innerHTML >= 60) {
        hr.innerHTML++;
        min.innerHTML = min.innerHTML - 60;
    }  
   


       /*if(msec.innerHTML <= 0 && msec.innerHTML <= 9) {
        msec.innerHTML = '0' + msec.innerHTML
       } 

       if(sec.innerHTML <= 0 && sec.innerHTML <= 9) {
        sec.innerHTML = '0' + sec.innerHTML;
       } 

       if(min.innerHTML <= 0 && min.innerHTML <= 9) {
        min.innerHTML = '0' + min.innerHTML;
       }*/
}