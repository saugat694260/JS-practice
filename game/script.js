const gameBoard=document.querySelector(".gameBoard");
const ctx=gameBoard.getContext("2d"); //to draw
const score=document.querySelector(".score");
const resetButton=document.querySelector(".resetButton");
//game
const gamewidth=gameBoard.width;
const gameheight=gameBoard.height;
//
const boardBackground="Black";
const characterColor="#ff7272";
const obstaclesColour="white";
//
const unitSize=20;//size of every thing on the game
//
let time;
let running=false;
let xVelocity=unitSize;
let yVelocity=gameheight-15;
let  obstaclesX;
let obstaclesY;
let characterX=100;
let characterY=270;
let scores=0;
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
      drawCharacter();
       moveObstacles();
       drawObstacles();
       generateObstacles();
       jump();
       checkGameover();
       nextTick();
       
       
       
     },75);//75 for how fast you want to run this
   }
   else{
    displayGameover();
  }
}
function clearBoard(){
  
    ctx.fillStyle=boardBackground;
    ctx.fillRect(0,0,gamewidth,gameheight);
  
}
function createObstacles(){
  obstaclesX=gamewidth;
  
}
function drawObstacles(){
  ctx.fillStyle=obstaclesColour;
  ctx.strokeStyle="foodBorder";//incomplete
  ctx.fillRect(obstaclesX,obstaclesY,unitSize-10,unitSize-10); 
}
function moveObstacles(){
  obstaclesX-=xVelocity;
  obstaclesY=yVelocity;
}
function jump(){
if(characterY<=270){
  characterY+=8;
}
}
function drawCharacter(){
  ctx.fillStyle=characterColor;
  ctx.fillRect(characterX,characterY,unitSize,unitSize);
}
function changeDirection(event){
  const keyPressed=event.keyCode;
  const left=37;
  const right=39;
  //const down=40;
  const up=38;
  
//
switch(true){
  case(keyPressed==left):
  characterX-=unitSize;
  break;
  //
  case(keyPressed==right):
  characterX+=unitSize;
  break;
  //

  case(keyPressed==up):
  if(characterY>220){
    characterY-=50;
  }
  break;
  //
  //case(keyPressed==down):
 // characterY+=unitSize;
 // break;
}
}
//

function generateObstacles(){
  //generates from other side
if(obstaclesX<=0){
obstaclesX=gamewidth;
scores++;
}


  }


function checkGameover(){
  if(characterX==obstaclesX-unitSize && characterY>=265){
    running=false;

  }
}
function displayGameover(){
  ctx.font="50px MV Boli";
  ctx.fillStyle="red";
  ctx.textAlign="center";
  ctx.fillText=("GAMEOVER",gamewidth/2,gameheight/2);
  running=false;

}
function resetGame(){
 
  xVelocity=unitSize;
  yVelocity=gameheight-unitSize;
  obstaclesX;
  obstaclesY;
  characterX=100;
  characterY=270;
 scores=0;
 
  gameStart();
  
}
