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
    let win = null

   if(computerSelection === 'rock' && playerSelection === 'paper'){
    results = 'You win, paper swallows rock'
    win = true
    console.log('You win, paper swallows rock')
   }else if(computerSelection === 'paper' && playerSelection === 'rock'){
    results = 'You Loose, Paper swallows rock'
    win = false
    console.log('You Loose, Paper swallows rock')
   }else if(computerSelection === 'scissor' && playerSelection === 'paper'){
    results = 'You Loose, scissor cuts paper'
    win = false
    console.log('You Loose, scissor cuts paper')
   }else if(computerSelection === 'paper' && playerSelection === 'scissor'){
    results = 'You win, scissor beats paper'
    win = true
    console.log('You win, scissor beats paper')
   }else if(computerSelection === 'rock' && playerSelection === 'scissor'){
    results = 'You Loose, rock beats scissor'
    win = false
    console.log('You Loose, rock beats scissor')
   }else if(computerSelection === 'scissor' && playerSelection === 'rock'){
    results = 'You win, rock beats scissor'
    win = true
    console.log('You win, rock beats scissor')
    win = true
   }else{
    results = 'a tie'
    console.log('a tie')
    win = null
   }

   return win
}


function game(){
    
    let computerPoints = 0
    let playersPoint = 0

    for(i=1;i<=5;i++){
      let champ = playRound(getComputerChoice(),getPlayerChoice())
        if(champ === true){
            playersPoint++
        }else if(champ === false){
            computerPoints++
        }else{
            computerPoints = computerPoints
            playersPoint = playersPoint
        }

    }
    if(playersPoint>computerPoints){
        results = 'You won Congrats'
    }else if(playersPoint === computerPoints){
        results = 'a tie'
    }else{
        'you lost'
    }
    
    console.log(results)
    return results

}

game()