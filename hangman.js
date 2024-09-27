let numGuesses = 10;
let word = prompt("Type in a word or leave blank for a random word.");
if (!word)
{
let words = ["Javascript", "science", "code", "Earth"];
let index = Math.floor(Math.random() * words.length);
word = words[index];
}

word = word.toUpperCase();
let playerWord = [];

for (let i = 0; i < word.length; i++)
{
playerWord.push("-");
}

while (playerWord.indexOf("-") >= 0 && numGuesses > 0)
{
let message = playerWord.join(" ");
message += "Guess a letter."

let guess = prompt(message);
guess = guess[0].toUpperCase();

let wrongGuess = true;
for (let j = 0; j < word.length; j++)
{
if (word[j] === guess)
{
playerWord[j] = guess;
wrongGuess = false;
}
}
if (wrongGuess)
{
alert(guess + " is not in the word.");
numGuesses--;
}
}

alert("The word was " + word +".");

if(numGuesses > 0)
{
alert("You won, butt slapper!")
}
else
{
alert("You lose, dumbhead!")
}
