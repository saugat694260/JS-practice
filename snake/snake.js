//
const gameBoard=document.querySelector(".gameBoard");
const ctx=gameBoard.getContext("2d"); //to draw
const score=document.querySelector(".score");
const resetButton=document.querySelector(".resetButton");
//game
const gamewidth=gameBoard.width;
const gameheight=gameBoard.height;
//
const boardBackground="Black";
const snakeColor="#ff7272";
const snakeBorder="blue";
const foodColour="white";
const foodBorder="red";
//
const unitSize=20;//size of every thing on the game
//
let time;
let running=false;
let xVelocity=unitSize;
let yVelocity=0;
let  foodX;
let foodY;
let scores=0;

//snake body parts
let snake=[
  {x:unitSize*4,y:0},
  {x:unitSize*3,y:0},
  {x:unitSize*2,y:0},
  {x:unitSize,y:0},
  {x:0,y:0}
]
//

window.addEventListener("keydown",changeDirection);
resetButton.addEventListener("click",resetGame);
gameStart();

//functions

function gameStart(){
running=true;
score.textContent=scores;
createFood();
drawFood();
nextTick();//update the clock
}
//

function nextTick(){
  if(running){
   time= setTimeout(() => {
      clearBoard();
     drawFood();
      moveSnake();
      drawSnake();
      checkGameover();
      nextTick();
    },75);//75 for how fast you want to run this
  }
  //
  else{
    displayGameover();
  }
}
//

function clearBoard(){
  ctx.fillStyle=boardBackground;
  ctx.fillRect(0,0,gamewidth,gameheight);
}
//

//

function createFood(){
 
  function randomFood(min,max){
    const randNum=Math.round(((Math.random()*(max-min)+min)/unitSize))*unitSize;
 return randNum;
  }
  foodX=randomFood(0,gamewidth-unitSize);
  foodY=randomFood(0,gamewidth-unitSize);
}
//
/*function drawspecialFood(){
  ctx.fillStyle="red";
  ctx.strokeStyle=foodBorder;//incomplete
  ctx.fillRect(foodX,foodY,unitSize,unitSize); 
}*/
//
function drawFood(){
 ctx.fillStyle=foodColour;
 ctx.strokeStyle="foodBorder";//incomplete
 ctx.fillRect(foodX,foodY,unitSize-10,unitSize-10); 
}
//

function moveSnake(){
  const head={x:snake[0].x+xVelocity,
              y:snake[0].y+yVelocity};
  //
  snake.unshift(head);//add this new head in to snake

  //if food is eaten
  if(snake[0].x==foodX && snake[0].y==foodY){
        scores++;
        score.textContent=scores;
        createFood();
  }
  //
  else{
      snake.pop();//deletes tail
  }
  //special food
  //let i=10;
  //while(i<=scores){
   // if(scores==i){
      //drawspecialFood();
      //};

   // i=i+8;
//}
}
//

function drawSnake(){
  ctx.fillStyle=snakeColor;
  ctx.strokeStyle=snakeBorder;
  //
  snake.forEach((snakeParts)=>{
ctx.fillRect(snakeParts.x,snakeParts.y,unitSize,unitSize);
ctx.strokeRect(snakeParts.x,snakeParts.y,unitSize,unitSize);
  })
}
//

function changeDirection(event){

  const keyPressed=event.keyCode;
  const left=37;
  const right=39;
  const down=40;
  const up=38;
  //
  const goingUp=(yVelocity==-unitSize);
  const goingDown=(yVelocity==unitSize);
  const goingLeft=(xVelocity==-unitSize);
  const goingRight=(xVelocity==unitSize);
//
switch(true){
  case(keyPressed==left && !goingRight):
  xVelocity=-unitSize;
  yVelocity=0;
  break;
  //
  case(keyPressed==right && !goingLeft):
  xVelocity=unitSize;
  yVelocity=0;
  break;
  //

  case(keyPressed==up && !goingDown):
  yVelocity=-unitSize;
  xVelocity=0;
  break;
  //
  case(keyPressed==down && !goingUp):
  yVelocity=unitSize;
  xVelocity=0;
  break;
}
}
//

function checkGameover(){
  //generates from other side
  switch(true){
  
case(snake[0].x<0):
snake[0].x=gamewidth;
break;
//
case(snake[0].x>=gamewidth):
snake[0].x=0;
break;
//
case(snake[0].y<0):
snake[0].y=gameheight;

break;
//
case(snake[0].y>=gameheight):
snake[0].y=0;
break;
  }
  //body collision
  for(let i=1;i<snake.length;i++){
    if(snake[i].x==snake[0].x &&snake[i].y==snake[0].y){
      running=false;
    }
  }
}
//
function displayGameover(){
  ctx.font="50px MV Boli";
  ctx.fillStyle="red";
  ctx.textAlign="center";
  ctx.fillText=("GAMEOVER",gamewidth/2,gameheight/2);
  running=false;
}
//
function resetGame(){
  scores=0;
  xVelocity=unitSize;
  yVelocity=0;
  snake=[
    {x:unitSize*4,y:0},
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize,y:0},
    {x:0,y:0}
  ];
  gameStart();
  clearTimeout(time);

}