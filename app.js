function getComputerChoice(){
    let choices = ['rock','paper','scissor']

    let randomChoice =  Math.floor(Math.random()*3) 

    return choices[randomChoice]
}

function getPlayerChoice(){
    let playersChoice = prompt('Enter your Choice')

    
   return playersChoice.toLowerCase()
}

function playRound(computerSelection,playerSelection){
    let results = ''

   if(computerSelection === 'rock' && playerSelection === 'paper'){
    results = 'You win, paper swallows rock''
    console.log('You win, paper swallows rock')
   }else if(computerSelection === 'paper' && playerSelection === 'rock'){
    results = 'You Loose, Paper swallows rock'
    console.log('You Loose, Paper swallows rock')
   }else if(computerSelection === 'scissor' && playerSelection === 'paper'){
    results = 'You Loose, scissor cuts paper'
    console.log('You Loose, scissor cuts paper')
   }else if(computerSelection === 'paper' && playerSelection === 'scissor'){
    results = 'You win, scissor beats paper'
    console.log('You win, scissor beats paper')
   }else if(computerSelection === 'rock' && playerSelection === 'scissor'){
    results = 'You Loose, rock beats scissor'
    console.log('You Loose, rock beats scissor')
   }else if(computerSelection === 'scissor' && playerSelection === 'rock'){
    results = 'You win, rock beats scissor'
    console.log('You win, rock beats scissor')
   }else{
    results = 'a tie'
    console.log('a tie')
   }

   return results
}

playRound(getComputerChoice(),getPlayerChoice())