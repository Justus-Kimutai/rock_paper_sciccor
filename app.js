const buttons = document.querySelectorAll('.img-div')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const statusText = document.querySelector('.status-text')
const resetDiv = document.querySelector('.reset')
const resetText = document.querySelector('.resetText')
const resetBtn = document.querySelector('.resetBtn')
let computerPoint = 0
let playerPoint = 0

buttons.forEach(button=>{
    button.addEventListener('click',playRound)
})


function getComputerChoice(){
    let choices = ['rock','paper','scissor']

    let randomChoice =  Math.floor(Math.random()*3) 

    return choices[randomChoice]
}

  

function playRound(){
    let playerSelection = this.getAttribute("id")
    let computerSelection = getComputerChoice()

   if(computerSelection === 'rock' && playerSelection === 'paper'){

        playerPoint++

        player.textContent = playerPoint

        statusText.textContent = `You won computer Chose ${computerSelection}`

   }else if(computerSelection === 'paper' && playerSelection === 'rock'){

        computerPoint++

        computer.textContent = computerPoint
        statusText.textContent = `You lost computer Chose ${computerSelection}`

   }else if(computerSelection === 'scissor' && playerSelection === 'paper'){


     computerPoint++

     computer.textContent = computerPoint
     statusText.textContent = `You lost computer Chose ${computerSelection}`

   }else if(computerSelection === 'paper' && playerSelection === 'scissor'){

        playerPoint++

        player.textContent = playerPoint
        statusText.textContent = `You won computer Chose ${computerSelection}`
        

   }else if(computerSelection === 'rock' && playerSelection === 'scissor'){

          computerPoint++

          computer.textContent = computerPoint
          statusText.textContent = `You lost computer Chose ${computerSelection}`

   }else if(computerSelection === 'scissor' && playerSelection === 'rock'){ 

        playerPoint++

        player.textContent = playerPoint
        statusText.textContent = `You won computer Chose ${computerSelection}`

   }else{
     statusText.textContent = `A tie`
   }
   evaluateGame()
   
 }

 function evaluateGame(){
     if(computerPoint === 5){
          resetText.textContent = `You lost Big man ...Too bad`
          resetDiv.style.display = 'block'
          resetGame()
     }else if(playerPoint === 5){
          resetText.textContent = `Congrats Big man ...You won`
          resetDiv.style.display = 'block'
          resetGame()
     }
 }
   
 function resetGame(){

     computer.textContent = 0
     player.textContent = 0
     statusText.textContent = ''

     computerPoint = 0
     playerPoint = 0

     resetBtn.addEventListener('click',()=>{
          resetDiv.style.display = 'none'
     })
 }