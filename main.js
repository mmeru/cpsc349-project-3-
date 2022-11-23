//For modules you create another JS file and use export default on the main class and export on the functions as a prefix
//To import these modules you would for example say import User from '/user.js' if the default class was User
//Another way shown in MDN web docs is export { name, draw, reportArea, reportPerimeter }; on the module and import { name, draw, reportArea, reportPerimeter } from './modules/square.js'; in the JS file
/*
Tasks in JS:
1.Make the underscores appear in the guesses div with the DOM
2.Make the buttons unclickable after being clicked once
3.Make the buttons correspond with the letters in the word
4.Make the image change when a wrong letter is chosen
5.Make the lose/win conditions and then create the winner/loser screen in html/css
6.Make the chosen correct letter replace the underscores
7.Make the program choose a random word from the bank 

*/

import { guesses,word, hiddenWord, alphabet, secretWord} from './modules/createGuesses.js';
hiddenWord(word);
const guessClass = document.getElementById('guesses');
const newGuess = document.createElement('h2');
const newGuessContent = document.createTextNode(secretWord);
guessClass.append(newGuess);
newGuess.append(newGuessContent);
