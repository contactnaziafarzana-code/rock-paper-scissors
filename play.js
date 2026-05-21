
const inputs= ['rock', 'paper', 'scissor'];
let  humanPlayer = 0 ;
 let comPlayer = 0;
 
 function playGame()
 {
  
  for (let i = 0; i < 5; i++) {

let userInput = prompt(`Round ${i + 1}: what is your choice? (rock, paper, scissor)`);

const humanPlayer =userInput ? userInput.toLowerCase() : "";;
const comPlayer = inputs[Math.floor(Math.random() * inputs.length)];
   
console.log(`round ${i + 1} - Human Player: ${humanPlayer}, Computer Player: ${comPlayer}`);

if(!inputs.includes(humanPlayer))
    alert("invalid");
  
else if (humanPlayer === "rock" && comPlayer === "scissor" || humanPlayer === "paper" && comPlayer === "rock" || humanPlayer === "scissor" && comPlayer === "paper")
{
alert ("HumanPlayer win.");
humanPlayer++;
}
else if (humanPlayer === comPlayer){
alert ("It's a Tie.", humanPlayer, comPlayer);
}
else {
  alert("comPlayer win.");
  comPlayer++;
  }
}
playGame(); 

if (humanPlayer > comPlayer) {
  console.log(`Winner: Human Player with ${humanPlayer} points!`);
} else {
  console.log(`Winner: Computer Player with ${comPlayer} points!`);
}


let  humanPlayer = 0 ;
 let comPlayer = 0; }
