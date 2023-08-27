
    let score =
      JSON.parse(localStorage.getItem('score')) ||
      {
        win: 0,
        loss: 0,
        tie: 0
      };
    updatescore();
    let isautoplaying=false;
   let intervalid;
     function autoplay(){
      if(!isautoplaying){
      intervalid= setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);},10);
        isautoplaying=true;
      }
      else{
       clearInterval(intervalid);
       isautoplaying=false;

      }
    
    }
   document.body.addEventListener('keydown',(event)=>{if(event.key==='r'){playGame('rock');}
   else if(event.key==='p'){
    playGame('paper');
   }
   else if(event.key==='s'){
    playGame('scissors');
   }
  });


    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }
      if (result === 'You win.') {
        score.win++;
      }
      else if (result === 'You lose.') {
        score.loss++;
      }
      else if (result === 'Tie.') {
        score.tie++;

      }

      localStorage.setItem('score', JSON.stringify(score));

      updatescore();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=
`you
  <img class="image" src="/Rock Paper Scissors_files/${playerMove}-emoji.png">
  <img  class="image" src="/Rock Paper Scissors_files/${computerMove}-emoji.png">computer
      `;
   
    }
    function  updatescore(){
      document.querySelector('.js-score').innerHTML = `
            win: ${score.win} ,loss: ${score.loss} ,tie ${score.tie}`;
    }
   

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }