import {data} from"./data.js";
let currentLevel=0;
let questionNumber=0;
let currentQuestionData=[];
let countdownTime=10;
let levelsData=[];
let currentLevelData=[];
let startOfQuestion=0;
let endOfQuestion;
updateData();
function updateData(){
    data.forEach((levels)=>{
        levelsData.push(levels);
        });
        
        currentLevelData.push(levelsData[currentLevel]);
        
        currentLevelData.forEach((data)=>{
            currentQuestionData=data.values[questionNumber];
            endOfQuestion=data.values.length;
        
        })
}



let questionsMainBox=idSelector("question-main-box-js");
let questionsMainBoxHtml="";

updatequestionMainBoxHtml();

function updatequestionMainBoxHtml(){
    questionsMainBoxHtml=`<p id="level-js">level ${currentLevel+1}</p>
        <div class="question-sub-box">
<div class="timer" id="timer-js">${countdownTime}</div>
<div class="question" id="question-js">${currentQuestionData.question}</div>
<div class="options-container" id="options-container-js">
<button id="option-button-js" data-option-number=0>${currentQuestionData.options[0].option1}</button>
<button id="option-button-js" data-option-number=1>${currentQuestionData.options[1].option2}</button>
<button id="option-button-js" data-option-number=2>${currentQuestionData.options[2].option3}</button>
<button id="option-button-js" data-option-number=3>${currentQuestionData.options[3].option4}</button>
</div>
        </div>`;
        
}
questionsMainBox.innerHTML=questionsMainBoxHtml;
    
        
  




let timer=idSelector("timer-js");

//timer

let mainInterval=setInterval(()=>{

   
countdownTime-=1;
timer.textContent=countdownTime;


    updatequestionMainBoxHtml();
 

questionsMainBox.innerHTML=questionsMainBoxHtml;
userAnswer();
    highlightAnswer();
   
if(countdownTime<=0){
    countdownTime=10;
    questionNumber+=1;
    startOfQuestion++;
    
    
}
    updateData();


},1000);

function userAnswer(){
    document.querySelectorAll("#option-button-js").forEach((element)=>{
    
        element.addEventListener('click',(e)=>{
        let buttonNumber=element.dataset.optionNumber;
        if(!buttonNumber==currentQuestionData.correctAnswer){
            let optionButton=document.getElementsByTagName("button")[buttonNumber];
            optionButton.style.backgroundColor="red";
            optionButton=document.getElementsByTagName("button")[currentQuestionData.correctAnswer];
        optionButton.style.backgroundColor="green";
        countdownTime=10;
    questionNumber+=1;
    updateData();
    startOfQuestion++;
   
        }
        else{
            
            let optionButton=document.getElementsByTagName("button")[buttonNumber];
        optionButton.style.backgroundColor="green";
        countdownTime=10;
        questionNumber+=1;
        startOfQuestion++;
    updateData();
    
    
        }
        });
        });
}




//correct answer
function highlightAnswer(){
    if(countdownTime<=0){
        let optionButton=document.getElementsByTagName("button")[currentQuestionData.correctAnswer];
        optionButton.style.backgroundColor="green"
    };
}





//get element by id
function idSelector(id){
let element=document.getElementById(id);
return element;
}