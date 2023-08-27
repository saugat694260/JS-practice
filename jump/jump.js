let avatar=document.querySelector(".avatar");
let block=document.querySelector(".block");
const restart=document.querySelector(".restart");
const money=document.querySelector(".coins");

//
var counter = 0;




window.addEventListener("click",jump)
function jump(){
  if(AnimationEffect.classList!="animate"){
    avatar.classList.add("animate");
  }
  setTimeout(function(){
    avatar.classList.remove("animate")
  },500)
}

let gameover=setInterval(game,0);

function game(){
 
  let avatarHeight=parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));

  let avatarright=parseInt(window.getComputedStyle(avatar).getPropertyValue("right"))

  let avatarbottom=parseInt(window.getComputedStyle(avatar).getPropertyValue("right"))

  let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  let coinleft=parseInt(window.getComputedStyle(money).getPropertyValue("left"));

  let cointop=parseInt(window.getComputedStyle(money).getPropertyValue("top"));

  if(coinleft==153 &&blockLeft==151 && avatarHeight==170){
    counter++
    
    console.log(counter)//incomplete

  }
 

 
 
  if(blockLeft<160 && blockLeft>130 && avatarHeight>=160){
    block.style.animation="none";
    clearInterval(gameover);
   
    document.querySelector(".center").innerHTML=`<button class="restart" onclick>Restart</button><br><br>GAMEOVER`;
    document.querySelector(".restart").addEventListener("click",()=>{
      document.querySelector(".center").innerHTML=``;
      block.style.animation="block 2s infinite linear";
      score=0;
      gameover=setInterval(game,0);
    
    })
   
  


  }
 
}
