const gameBoard=document.querySelector(".gameBoard");
const ctx=gameBoard.getContext("2d");
const score=document.querySelector(".score");
const button=document.querySelector(".resetButton");
//
gameWidth=gameBoard.width;
gameHeight=gameBoard.height;
//
const boardColor="#6ACF65";
const paddle1Color="#880808";
const paddle2Color="#1A1110";
//const paddleBorder="";
const ballColor="#D3D3D3";
const ballBorderColor="Black";
const ballRadius=8.5;
const paddleSpeed=40;
//
let intervalID;
let ballSpeed=1;
let ballX=gameWidth/2;
let ballY=gameHeight/2;
let ballXDirection=0;
let ballYDirection=0;
let player1Score=0;
let player2Score=0;
//
let paddle1={
  width:10,
  height:50,
  x:0,
  y:0
}
let paddle2={
  width:10,
  height:50,
  x:gameWidth-10,
  y:gameHeight-50
}
//
window.addEventListener("keydown",changeDirection);
button.addEventListener("click",resetGame);

//
gameStart();
//
function gameStart(){
createBall();
nextTick();
}
//
function nextTick(){
intervalID=setTimeout(()=>{
  clearBoard();
  drewPaddles();//had to name it drew cause draw didnt work
  moveBall();
  drawBall(ballX,ballY);
  checkCollisions();
  nextTick();
},10);
}
//
function clearBoard(){
ctx.fillStyle=boardColor;
ctx.fillRect(0,0,gameWidth,gameHeight);
//line
ctx.strokeStyle="white";
ctx.lineWidth=7;
ctx.beginPath();
ctx.moveTo(gameWidth/2,0);
ctx.lineTo(gameWidth/2,gameHeight);
ctx.stroke();
}
//
function drewPaddles(){
//ctx.strokeStyle=paddleBorder;
//removing border
ctx.fillStyle=paddle1Color;
ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);
//ctx.strokeRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);

ctx.fillStyle=paddle2Color;
ctx.fillRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
//ctx.strokeRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);

}
//
function createBall(){
ballSpeed=1;
//
if(Math.round(Math.random())==1){
  ballXDirection=1;//right
}
else{
  ballXDirection=-1;//left
}


if(Math.round(Math.random())===1){
  ballYDirection=Math.random()*1;
}
else{
  ballYDirection=Math.random()*-1;
}
//
ballX=gameWidth/2;
ballY=gameHeight/2;
drawBall(ballX,ballY);
}
//
function moveBall(){
ballX+=(ballSpeed*ballXDirection);
ballY+=(ballSpeed*ballYDirection);
}
//
function drawBall(ballX,ballY){
ctx.fillStyle=ballColor;
ctx.strokeStyle=ballBorderColor;
ctx.lineWidth=2;
ctx.beginPath();
ctx.arc(ballX,ballY,ballRadius,0,2*Math.PI);
ctx.stroke();
ctx.fill();
}
//
function checkCollisions(){
//up and down collisions
if(ballY<=0+ballRadius){
ballYDirection*=-1;
}

if(ballY>=gameHeight-ballRadius){
  ballYDirection*=-1;
}
//edge score
if(ballX<=0){
  player2Score+=1;
  updateScore();
  createBall();
  return;
 }
 
 if(ballX>=gameWidth){
   player1Score+=1;
   updateScore();
  createBall();
  return;
  }
  //paddles collision
  //paddle1
if(ballX<=(paddle1.x+paddle1.width)){

  if(ballY>paddle1.y && ballY<paddle1.y+paddle1.height){
    ballX=(paddle1.x+paddle1.width+ballRadius)//ball stuck
      ballXDirection*=-1;
  }

}
//paddle2
if(ballX>=(paddle2.x-paddle2.width)){

  if(ballY>paddle2.y && ballY<paddle2.y+paddle2.height){
    ballX=paddle2.x-ballRadius//ball stuck
      ballXDirection*=-1;
  }
  
}
}
//
function changeDirection(event){
const keyPressed=event.keyCode;

const paddle1Up=87;
const paddle1Down=83;

const paddle2Up=38;
const paddle2Down=40;

//
switch(keyPressed){
  case(paddle1Up):
      if(paddle1.y > 0){
          paddle1.y -= paddleSpeed;
      }
      break;
  case(paddle1Down):
      if(paddle1.y < gameHeight - paddle1.height){
          paddle1.y += paddleSpeed;
      }
      break;
  case(paddle2Up):
      if(paddle2.y > 0){
          paddle2.y -= paddleSpeed;
      }
      break;
  case(paddle2Down):
      if(paddle2.y < gameHeight - paddle2.height){
          paddle2.y += paddleSpeed;
      }
      break;
}
};

//
function updateScore(){
score.textContent=`${player1Score}:${player2Score}`
}
//
function resetGame(){
player1Score=0;
player2Score=0;

paddle1={
  width:10,
  height:50,
  x:0,
  y:0
}
paddle2={
  width:10,
  height:50,
  x:gameWidth-10,
  y:gameHeight-50
}

ballSpeed=1;
ballX=0;
balY=0;
ballXDirection=0;
ballYDirection=0;
updateScore();
clearInterval(intervalID);
gameStart();


}
//

