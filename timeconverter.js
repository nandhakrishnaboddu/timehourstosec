let hinput=document.getElementById("hoursInput");
let minput=document.getElementById("minutesInput");
let btnele=document.getElementById("convertBtn");
let emsg=document.getElementById("errorMsg");
let tinsec=document.getElementById("timeInSeconds");
let value=0;
function converttoseconds(hours,minutes){
    if(hours==="" && minutes===""){
        emsg.textContent="please enter the valid number of hours and minutes";
    }
    else if(hours===""){
         emsg.textContent="please enter the valid number of hours";
    }
    else if(minutes===""){
         emsg.textContent="pleasse enter the valid number of minutes";
    }
    else{
        value=parseInt(hours)*3600+parseInt(minutes)*60;
       
        tinsec.textContent=value;
        value=0;
    }
}

btnele.addEventListener("click",function(){
     emsg.textContent="";
     tinsec.textContent="";
    let hours=hinput.value;
    let minutes=minput.value;
    converttoseconds(hours,minutes);
})