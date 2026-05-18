
let inputs= ['rock', 'paper', 'scissor'];
let userInput = prompt("what is your choice? (rock,paper,scissors)");
let humanPlayer = userInput;

const randomItem = inputs[Math.floor(Math.random() * inputs.length)];

let comPlayer=randomItem;











if(!inputs.includes(humanPlayer))
    alert("invalid");
else if (humanPlayer === "rock" && comPlayer === "scissor" || humanPlayer === "paper" && comPlayer === "rock" || humanPlayer === "scissor" && comPlayer === "paper")
{
alert ("HumanPlayer win.");
console.log("hum: ", humanPlayer , comPlayer)}
   else if (humanPlayer === comPlayer){
alert ("Tie!!");
   console.log("hum: ", humanPlayer, comPlayer); }
  else {
  alert("comPlayer win.");
  console.log("hum: ", humanPlayer, comPlayer);
}
