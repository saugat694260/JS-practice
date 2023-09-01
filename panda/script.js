const gameBoard=document.querySelector(".gameBoard");
const ctx=gameBoard.getContext("2d"); //to draw
const score=document.querySelector(".score");
const resetButton=document.querySelector(".resetButton");
//game
const gamewidth=gameBoard.width;
const gameheight=gameBoard.height;
//

let time;
let running=false;
let scores=0;
const backgroundColor="#ADD8E6";
const playerColor="#232b2b";
const obstaclesColour="#D2042D";
const pathColor="black;"

//



//

let pathWidth=6;
const unitSize=20;

xVelocity=gamewidth/2;
yVelocity=unitSize/2;

let obstacle1X=gamewidth/2;
let obstacle1Y=0;
let obstacle2X=(gamewidth/2)-unitSize;
let obstacle2Y=gameheight/2;
let obstacle3X=gamewidth/2;
let obstacle3Y=gameheight/5;
let temp;


let playerX=gamewidth/2;
let playerY=gameheight-unitSize-10;

//



//

 

   


  window.addEventListener("keydown",changeDirection);
  resetButton.addEventListener("click",resetGame);
  gameStart();
  
  //functions
  function gameStart(){
    running=true;
    createObstacles();
    
    drawObstacles();
    nextTick();//update the clock
  }
  function nextTick(){
    score.textContent=scores;
    if(running){
      time= setTimeout(() => {
         clearBoard();
        drawPlayer();
         moveObstacles();
         drawObstacles();
         generateObstacles();
       drawPath();
         checkGameover();
         nextTick();

     
         
         
         
       },75);//75 for how fast you want to run this
     }
     else{
      displayGameover();
    }
  
  }
  function clearBoard(){
    ctx.fillStyle=backgroundColor;
    ctx.fillRect(0,0,gamewidth,gameheight);
    
  }
  function drawPath(){
    ctx.fillStyle= pathColor;
ctx.lineWidth=pathWidth;
ctx.beginPath();
ctx.moveTo(gamewidth/2,0);
ctx.lineTo(gamewidth/2,gameheight);
ctx.stroke();

  }
  function drawPlayer(){
    ctx.fillStyle=playerColor;
    ctx.fillRect(playerX,playerY,unitSize,unitSize);
    
  }
  function createObstacles(){}


  function drawObstacles(){
   ctx.fillStyle= obstaclesColour;
    ctx.fillRect(obstacle1X,obstacle1Y,unitSize,unitSize); 

    ctx.fillRect(obstacle2X,obstacle2Y,unitSize,unitSize); 
  
    ctx.fillRect(obstacle3X,obstacle3Y,unitSize,unitSize); 
  }


  function generateObstacles(){
if(obstacle1Y>gameheight){
  
  //random y1
  let y=-Math.floor(((Math.random() * (2 -0 + 1) + 0)%10))*10;
  //random x1
 let x= Math.floor(Math.random() * (1 - 0 + 1) + 0)
if(x==1){
obstacle1X=(gamewidth/2)-unitSize;
}
else{
  obstacle1X=gamewidth/2
}
obstacle1Y=y;
point()


}
if(obstacle2Y>gameheight){
  //random y2
  let y=-Math.floor(((Math.random() * (6 -4 + 1) + 0)%10))*10;

  let x= Math.floor(Math.random() * (1 - 0 + 1) + 0)
  if(x==1){
  obstacle2X=(gamewidth/2)-unitSize;
  }
  else{
    obstacle2X=gamewidth/2
  }
  obstacle2Y=y;
  point()
}

if(obstacle3Y>gameheight){
 //random y3
 let y=-Math.floor(((Math.random() * (10 -8 + 1) + 0)%10))*10;

 let x= Math.floor(Math.random() * (1 - 0 + 1) + 0)
 if(x==1){
 obstacle3X=gamewidth/2;
 }
 else{
   obstacle3X=(gamewidth/2)-unitSize;
 }
  obstacle3Y=y;
  point()

  
}

  }
  function moveObstacles(){

   
    
  obstacle1Y+=yVelocity;


  obstacle2Y+=yVelocity;

 
  obstacle3Y+=yVelocity;
  }
  function changeDirection(event){
const keyPressed=event.keyCode;
const left=37;
const right=39;



//
switch(true){
case(keyPressed==left && playerX>(gamewidth/2)-unitSize):
playerX-=unitSize;

break;
//
case(keyPressed==right && playerX<(gamewidth/2)-unitSize+1):
playerX+=unitSize;
break;
//


}
  }
  function checkGameover(){

    if(playerY==obstacle1Y && playerX==obstacle1X ||playerY==obstacle2Y && playerX==obstacle2X||playerY==obstacle3Y && playerX==obstacle3X){
      running=false;
  
    }
  }
  
  function displayGameover(){
    ctx.font="40px MV Boli";
    ctx.fillStyle="red";
    ctx.textAlign="center";
    ctx.fillText("GAMEOVER",gamewidth/2,gameheight/2);
    running=false;
  }


  function resetGame(){
  obstacle1X=gamewidth/2;
obstacle1Y=0;
obstacle2X=(gamewidth/2)-unitSize;
obstacle2Y=gameheight/2;
 obstacle3X=gamewidth/2;
obstacle3Y=gameheight/5;
 
playerX=gamewidth/2;
playerY=gameheight-unitSize-10;
    scores=0;
 
    gameStart();

  }
  function point() {
    scores++;
    score.textContent=scores;
    return scores;

  }
 
  ////setInterval(() => {
   
    //console.log(y);
  //},1000);