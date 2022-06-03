//function gets random element from an array passed to it
function getRandomElement(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
} 


console.log('Welcome to your guessing game. Enter your username:\n');

var userName = prompt('');

console.log(`\nAlright ${userName}. Let's begin.\n`);

var stage = 1;
var score = 0;
var range = [1,2];
var end = false;

//loop ends the game when user guesses a wrong answer
while (end === false){
  var randomInteger = getRandomElement(range);
  
  console.log(` Stage ${stage}: \n Guess an integer from ${range[0]} to ${range[range.length-1]}. (${range[0]} and ${range[range.length-1]} inclusive) \n`);

  var userGuess = Number(prompt(''));
  // loop ensures user guesses an integer within the given range
  while (!range.includes(userGuess)){
    console.log('\nYour option is not included in the range given. Try again..\n');
    userGuess = Number(prompt(''));
  }
  
  // sets conditions for when user guesses right or wrong
  if (userGuess === randomInteger){
    score += 1;
    stage += 1;
    range.push(range[range.length-1] +1);
    console.log(`\n Correct!!  You move to stage ${stage}\n\n`);
  }else {
    end = true;
    console.log(`\n Game Over! \n Your score: ${score}`);
  }
}




