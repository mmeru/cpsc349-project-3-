//For modules you create another JS file and use export default on the main class and export on the functions as a prefix
//To import these modules you would for example say import User from '/user.js' if the default class was User
//Another way shown in MDN web docs is export { name, draw, reportArea, reportPerimeter }; on the module and import { name, draw, reportArea, reportPerimeter } from './modules/square.js'; in the JS file
/*
Tasks in JS:
1.Make the underscores appear in the guesses div with the DOM -Done by Angel 
2.Make the buttons unclickable after being clicked once - Done Angel
3.Make the buttons correspond with the letters in the word
4.Make the image change when a wrong letter is chosen
5.Make the lose/win conditions and then create the winner/loser screen in html/css
6.Make the chosen correct letter replace the underscores 
7.Make the program choose a random word from the bank -Done by Angel

*/

import { guesses,word, hiddenWord, alphabet, secretWord} from './modules/createGuesses.js';
//import {alphabetButton1, alphabetButton2, alphabetButton3, alphabetButton4, alphabetButton5, 
//    alphabetButton6,alphabetButton7,alphabetButton8, alphabetButton9, alphabetButton10, alphabetButton11,
//    alphabetButton12, alphabetButton13,alphabetButton14, alphabetButton15,alphabetButton16,alphabetButton17,
//    alphabetButton18, alphabetButton19, alphabetButton20, alphabetButton21, alphabetButton22, alphabetButton23, 
//    alphabetButton24, alphabetButton25,alphabetButton26} from './modules/letterButtons';
//printing out the underscores based on how many letters are in the chosen word
hiddenWord(word);
const guessClass = document.getElementById('guesses');
const newGuess = document.createElement('h2');
const newGuessContent = document.createTextNode(secretWord);
guessClass.append(newGuess);
newGuess.append(newGuessContent);
//Make buttons only clickable once 
var alphabetButton1 = document.getElementById('1');
alphabetButton1.addEventListener('click', () =>{
    alphabetButton1.className = "alphabet afterClicked";
});

var alphabetButton2 = document.getElementById('2');
alphabetButton2.addEventListener('click', () =>{
    alphabetButton2.className = "alphabet afterClicked";
});

var alphabetButton3 = document.getElementById('3');
alphabetButton3.addEventListener('click', () =>{
    alphabetButton3.className = "alphabet afterClicked";
});

var alphabetButton4 = document.getElementById('4');
alphabetButton4.addEventListener('click', () =>{
    alphabetButton4.className = "alphabet afterClicked";
});

var alphabetButton5 = document.getElementById('5');
alphabetButton5.addEventListener('click', () =>{
    alphabetButton5.className = "alphabet afterClicked";
});

var alphabetButton6 = document.getElementById('6');
alphabetButton6.addEventListener('click', () =>{
    alphabetButton6.className = "alphabet afterClicked";
});

var alphabetButton7 = document.getElementById('7');
alphabetButton7.addEventListener('click', () =>{
    alphabetButton7.className = "alphabet afterClicked";
});

var alphabetButton8 = document.getElementById('8');
alphabetButton8.addEventListener('click', () =>{
    alphabetButton8.className = "alphabet afterClicked";
});

var alphabetButton9 = document.getElementById('9');
alphabetButton9.addEventListener('click', () =>{
    alphabetButton9.className = "alphabet afterClicked";
});

var alphabetButton10 = document.getElementById('10');
alphabetButton10.addEventListener('click', () =>{
    alphabetButton10.className = "alphabet afterClicked";
});

var alphabetButton11 = document.getElementById('11');
alphabetButton11.addEventListener('click', () =>{
    alphabetButton11.className = "alphabet afterClicked";
});

var alphabetButton12 = document.getElementById('12');
alphabetButton12.addEventListener('click', () =>{
    alphabetButton12.className = "alphabet afterClicked";
});

var alphabetButton13 = document.getElementById('13');
alphabetButton13.addEventListener('click', () =>{
    alphabetButton13.className = "alphabet afterClicked";
});

var alphabetButton14 = document.getElementById('14');
alphabetButton14.addEventListener('click', () =>{
    alphabetButton14.className = "alphabet afterClicked";
});

var alphabetButton15 = document.getElementById('15');
alphabetButton15.addEventListener('click', () =>{
    alphabetButton15.className = "alphabet afterClicked";
});

var alphabetButton16 = document.getElementById('16');
alphabetButton16.addEventListener('click', () =>{
    alphabetButton16.className = "alphabet afterClicked";
});

var alphabetButton17 = document.getElementById('17');
alphabetButton17.addEventListener('click', () =>{
    alphabetButton17.className = "alphabet afterClicked";
});

var alphabetButton18 = document.getElementById('18');
alphabetButton18.addEventListener('click', () =>{
    alphabetButton18.className = "alphabet afterClicked";
});

var alphabetButton19 = document.getElementById('19');
alphabetButton19.addEventListener('click', () =>{
    alphabetButton19.className = "alphabet afterClicked";
});

var alphabetButton20 = document.getElementById('20');
alphabetButton20.addEventListener('click', () =>{
    alphabetButton20.className = "alphabet afterClicked";
});

var alphabetButton21 = document.getElementById('21');
alphabetButton21.addEventListener('click', () =>{
    alphabetButton21.className = "alphabet afterClicked";
});

var alphabetButton22 = document.getElementById('22');
alphabetButton22.addEventListener('click', () =>{
    alphabetButton22.className = "alphabet afterClicked";
});

var alphabetButton23 = document.getElementById('23');
alphabetButton23.addEventListener('click', () =>{
    alphabetButton23.className = "alphabet afterClicked";
});

var alphabetButton24 = document.getElementById('24');
alphabetButton24.addEventListener('click', () =>{
    alphabetButton24.className = "alphabet afterClicked";
});

var alphabetButton25 = document.getElementById('25');
alphabetButton25.addEventListener('click', () =>{
    alphabetButton25.className = "alphabet afterClicked";
});

var alphabetButton26 = document.getElementById('26');
alphabetButton26.addEventListener('click', () =>{
    alphabetButton26.className = "alphabet afterClicked";
});
//Make the buttons correspond with the letters in the word