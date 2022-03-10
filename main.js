var start=document.getElementById('start');
var reset=document.getElementById('stop');

var h=document.getElementById('hour');
var m=document.getElementById('minute');

var s=document.getElementById('sec');
var today = new Date();

//store a reference to the variable 

var hest=document.querySelector('#hourest')
var mest=document.querySelector('#minuteest');

var sest=document.querySelector('#secest');

hest.disabled=true;
mest.disabled=true;
sest.disabled=true;

var startTimrr =null;

function timer(){

if(h.value==0 && m.value==0 && s.value==0)
{
    h.value=0;
    m.value=0;
    s.value=0;

 
   
   

}else if(s.value!=0)
{
    s.value--;

   
   
 
    
}else if(m.value!=0 && s.value==0){
s.value=59;
m.value--;



}else if(h.value!=0 && m.value==0){
    m.value=60;
    h.value--;

    
   
}

}

function stopTimer(){
    clearInterval(startTimer)
}







start.addEventListener('click', function(){
   
document.getElementById('start').disabled=true;

function startInterval(){
    startTimer=setInterval(function(){
        
        
     
        today=new Date();
        
        hest.value=today.getHours();
        mest.value=today.getMinutes();
        sest.value=today.getSeconds();

        
        timer(); 
        

    },1000)
    
    
}

startInterval()

})




reset.addEventListener('click', function(){
    h.value=0;
    m.value=0;
    s.value=0;

    
    stopTimer();
    document.getElementById('start').disabled=false;
})