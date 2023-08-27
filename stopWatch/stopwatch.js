const timeDisplay=document.querySelector(".timeDisplay");
const start=document.querySelector(".startButton");
const lap=document.querySelector(".lapButton");

const reset=document.querySelector(".resetButton");
const lapTimes=document.querySelector(".lap");
let laps=[];
//
let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalid;
let hrs=0;
let mins=0;
let secs=0;
let millsecs=0;
//
start.addEventListener('click',()=>{
 if(paused){
paused=false;
startTime=Date.now()-elapsedTime;
intervalid=setInterval(updateTime,1);
start.innerText="Stop";


 }
 else if(start.innerText=="Stop"){
  paused=true;
  elapsedTime=Date.now()-startTime;
  start.innerText="resume";
  clearInterval(intervalid);
}

    else{
    paused=false;
    start.innerText="Stop";
    startTime=Date.now()-elapsedTime;
intervalid=setInterval(updateTime,1);
  }
  

//

}

);

lap.addEventListener('click',()=>{
 

  let html='';
  let timeText=timeDisplay.textContent;
  laps.push(timeText);
if(!paused){
 
  

for(let i=0;i<=laps.length;i++){
  
 
html=`<div class="laptimes[${i}]">${i} ${timeText}</div>`;
scale();

 
 };
}


lapTimes.innerHTML+=html}

  
  
  
  
 
  );
 
//
reset.addEventListener('click',()=>{
 paused=true;
 clearInterval(intervalid); 
 startTime=0;
 elapsedTime=0;
 currentTime=0;
 hrs=0;
 mins=0;
 secs=0;
 millsecs=0;
timeDisplay.textContent="00:00:00:00"
 document.querySelector('.lap').innerHTML="";
 start.innerText="Start";
 laps=[];
 console.log(laps);
 
});

function updateTime(){
elapsedTime=Date.now()-startTime;
millsecs=Math.floor((elapsedTime/60)%60);
secs=Math.floor((elapsedTime/1000)%60);
mins=Math.floor((elapsedTime/(1000*60))%60);
hrs=Math.floor((elapsedTime/(1000*60*60))%60);


//
millsecs=pad(millsecs);
secs=pad(secs);
mins=pad(mins);
hrs=pad(hrs);
//
timeDisplay.textContent=`${hrs}:${mins}:${secs}:${millsecs}`;

function pad(unit){
  return(("0")+unit).length>2?unit:"0"+unit;
}

}
function scale(){
  let timerid=null;
  let scaleX=0.01;
  let scaleY=0.01;
  //
  timerid=setInterval(frame,0.01);
  function frame(){
    if(scaleX>=1||scaleY>=1){
      clearInterval(timerid);
    }
    else{
      scaleX+=0.01;
      scaleY+=0.01;
      lapTimes.style.transform="scale("+scaleX+","+scaleY+")";

    }
  }
}