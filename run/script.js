let score=0;
const block=document.getElementById("block");
window.addEventListener("keydown",event=>{
  console.log(event)
  if(event.key==="ArrowLeft"){
moveLeft();
  }
  if(event.key==="ArrowRight"){
    moveRight();
  }
  if(event.key==='ArrowUp'){
    moveUp();
      }
      if(event.key==='ArrowDown'){
        moveDown();
      }
});

//
function moveLeft(){
  let left=parseInt(window.getComputedStyle(avatar).getPropertyValue("left"));
  left-=100;
  if(left>=0)
    avatar.style.left=left+"px";
  

}
function moveRight(){
  let left=parseInt(window.getComputedStyle(avatar).getPropertyValue("right"));
  left+=100;
  if(left<300)
  avatar.style.left=left+"px";
  
}
function moveUp(){
  let top=parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
  top-=50;
  if(top>=-100)
  avatar.style.top=top+"px";

}
function moveDown(){
  let top=parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
 top+=50;
 if(top<=400)
  avatar.style.top=top+"px";
  
}

block.addEventListener('animationiteration',()=>{let random=Math.floor(Math.random(Math.random()*3)*3);//bigrina sakxa
left=random*100;
block.style.left=left+"px";
score++;
console.log(score);//////score hai
}) 
setInterval(function(){
 
    let avatarleft=parseInt(window.getComputedStyle(avatar).getPropertyValue("left"));
    let blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blocktop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    //
    if(avatarleft==blockleft && blocktop<500 && blocktop>400){
    
      block.style.animation="none"
    }
    

},1);
document.getElementById("left").addEventListener("touchstart",moveLeft);//mobie
document.getElementById("right").addEventListener("touchstart",moveRight);//mobie

