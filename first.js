let gameNum = 25;

let userNum = prompt("Guess the game number : ")

while(userNum != gameNum){
 userNum = prompt("You entered the Wrong number. Guess Again :")
}
console.log("Congratulation, You Entered the right number " );