import {data} from"./data.js";
import {idSelector}from'./js files/utils.js';

let currentLevel=0;
let questionNumber=0;
let currentQuestionData=[];
let countdownTime=10;
let levelsData=[];
let currentLevelData=[];
let startOfQuestion=0;
let endOfQuestion;

updateData();

//adds the retrived data from object in array fro better access to data
function updateData(){

data.forEach((levels)=>{
//adds all the data in to levelData array
    levelsData.push(levels);

});

//pushes the data in current level data according to the currnet level
currentLevelData.push(levelsData[currentLevel]);

currentLevelData.forEach((data)=>{
    //pushes the data according to the index of current question
    currentQuestionData=data.values[questionNumber];
    //this code below is not in use yet
    endOfQuestion=data.values.length;

});
}


//selecting the container that contains main elements
let questionsMainBox=idSelector("question-main-box-js");
let questionsMainBoxHtml="";

updatequestionMainBoxHtml();

//add the elements in main container

function updatequestionMainBoxHtml(){

    questionsMainBoxHtml=`
        <p id="level-js">level ${currentLevel+1}</p>
        <div class="question-sub-box">
        <div class="timer" id="timer-js">${countdownTime}</div>
        <div class="question" id="question-js">${currentQuestionData.question}</div>
        <div class="options-container" id="options-container-js">
        <button id="option-button-js" data-option-number=0>${currentQuestionData.options[0].option1}</button>
        <button id="option-button-js" data-option-number=1>${currentQuestionData.options[1].option2}</button>
        <button id="option-button-js" data-option-number=2>${currentQuestionData.options[2].option3}</button>
        <button id="option-button-js" data-option-number=3>${currentQuestionData.options[3].option4}</button>
        </div>
        </div>
    `;
    //adding the elements
    questionsMainBox.innerHTML=questionsMainBoxHtml;  
}

    
        
  




let timer=idSelector("timer-js");

//timer for 1 second

let mainInterval=setInterval(()=>{

    //countdown time
    countdownTime-=1;
    timer.textContent=countdownTime;

    if(countdownTime<=0){

        countdownTime=10;
        questionNumber+=1;
        startOfQuestion++;


    }
    else{

        updatequestionMainBoxHtml();
        userAnswer();
        highlightAnswer();
        updateData();

    }


},1000);

//releated with all the events after user gives answer
function userAnswer(){

    //select all options button
    document.querySelectorAll("#option-button-js").forEach((element)=>{
        //select clicked button
        element.addEventListener('click',(e)=>{

            let buttonNumber=element.dataset.optionNumber;
            
            if(!buttonNumber==currentQuestionData.correctAnswer){
                //if the ans doesnt match
                let optionButton=document.getElementsByTagName("button")[buttonNumber];
                optionButton.style.backgroundColor="red";
                optionButton=document.getElementsByTagName("button")[currentQuestionData.correctAnswer];
                optionButton.style.backgroundColor="green";

                countdownTime=10;
                questionNumber+=1;
                updateData();

            }
            else{
                //if the and matches
                let optionButton=document.getElementsByTagName("button")[buttonNumber];
                optionButton.style.backgroundColor="green";

                countdownTime=10;
                questionNumber+=1;
                updateData();


            };
        });
    });
}




//hilights correct answer when timer reches certain level

function highlightAnswer(){
    if(countdownTime<=0){
        let optionButton=document.getElementsByTagName("button")[currentQuestionData.correctAnswer];
        optionButton.style.backgroundColor="green"
    };
}





