//For modules you create another JS file and use export default on the main class and export on the functions as a prefix
//To import these modules you would for example say import User from '/user.js' if the default class was User
//There are repeats among the modules because the modules were giving me problems so I put everything in main for now
//Another way shown in MDN web docs is export { name, draw, reportArea, reportPerimeter }; on the module and import { name, draw, reportArea, reportPerimeter } from './modules/square.js'; in the JS file
/*
Tasks in JS:
1.Make the underscores appear in the guesses div with the DOM -Done by Angel 
2.Make the buttons unclickable after being clicked once - Done by Angel
3.Make the buttons correspond with the letters in the word - Done by Angel
4.Make the image change when a wrong letter is chosen
5.Make the lose/win conditions and then create the winner/loser screen in html/css
6.Make the chosen correct letter replace the underscores - Done by Angel
7.Make the program choose a random word from the bank -Done by Angel

*/

import { guesses,word, hiddenWord, alphabet, secretWord, secretWordChange, secretWordDiff, secretWordChange2, secretWordChange3, secretWordChange4,
        secretWordChange5, secretWordChange6, secretWordChange7, secretWordChange8, secretWordChange9, secretWordChange10, secretWordChange11,
        secretWordChange12, secretWordChange13, secretWordChange14, secretWordChange15, secretWordChange16, secretWordChange17, secretWordChange18,
        secretWordChange19, secretWordChange20, secretWordChange21, secretWordChange22, secretWordChange23, secretWordChange24, secretWordChange25, secretWordChange26} from './modules/createGuesses.js';
//printing out the underscores based on how many letters are in the chosen word
hiddenWord(word);
const guessClass = document.getElementById('guesses');
const newGuess = document.createElement('h2');
var newGuessContent = document.createTextNode(secretWord);
guessClass.append(newGuess);
newGuess.append(newGuessContent);
//Make buttons only clickable once 
//secretWordChange changes the letter during the click event 
var alphabetButton1 = document.getElementById('1');
//This onclick event triggers for the alphabet 'A' key 
alphabetButton1.addEventListener('click', () =>{
    alphabetButton1.className = "alphabet afterClicked";
    //call letter change 
    secretWordChange();
    //set the html to the new values using the DOM
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
}, {once:true});

var alphabetButton2 = document.getElementById('2');
alphabetButton2.addEventListener('click', () =>{
    alphabetButton2.className = "alphabet afterClicked";
    secretWordChange2();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton3 = document.getElementById('3');
alphabetButton3.addEventListener('click', () =>{
    alphabetButton3.className = "alphabet afterClicked";
    secretWordChange3();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
}, {once:true});

var alphabetButton4 = document.getElementById('4');
alphabetButton4.addEventListener('click', () =>{
    alphabetButton4.className = "alphabet afterClicked";
    secretWordChange4();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton5 = document.getElementById('5');
alphabetButton5.addEventListener('click', () =>{
    alphabetButton5.className = "alphabet afterClicked";
    secretWordChange5();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton6 = document.getElementById('6');
alphabetButton6.addEventListener('click', () =>{
    alphabetButton6.className = "alphabet afterClicked";
    secretWordChange6();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton7 = document.getElementById('7');
alphabetButton7.addEventListener('click', () =>{
    alphabetButton7.className = "alphabet afterClicked";
    secretWordChange7();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton8 = document.getElementById('8');
alphabetButton8.addEventListener('click', () =>{
    alphabetButton8.className = "alphabet afterClicked";
    secretWordChange8();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton9 = document.getElementById('9');
alphabetButton9.addEventListener('click', () =>{
    alphabetButton9.className = "alphabet afterClicked";
    secretWordChange9();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton10 = document.getElementById('10');
alphabetButton10.addEventListener('click', () =>{
    alphabetButton10.className = "alphabet afterClicked";
    secretWordChange10();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton11 = document.getElementById('11');
alphabetButton11.addEventListener('click', () =>{
    alphabetButton11.className = "alphabet afterClicked";
    secretWordChange11();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton12 = document.getElementById('12');
alphabetButton12.addEventListener('click', () =>{
    alphabetButton12.className = "alphabet afterClicked";
    secretWordChange12();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton13 = document.getElementById('13');
alphabetButton13.addEventListener('click', () =>{
    alphabetButton13.className = "alphabet afterClicked";
    secretWordChange13();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton14 = document.getElementById('14');
alphabetButton14.addEventListener('click', () =>{
    alphabetButton14.className = "alphabet afterClicked";
    secretWordChange14();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton15 = document.getElementById('15');
alphabetButton15.addEventListener('click', () =>{
    alphabetButton15.className = "alphabet afterClicked";
    secretWordChange15();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton16 = document.getElementById('16');
alphabetButton16.addEventListener('click', () =>{
    alphabetButton16.className = "alphabet afterClicked";
    secretWordChange16();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton17 = document.getElementById('17');
alphabetButton17.addEventListener('click', () =>{
    alphabetButton17.className = "alphabet afterClicked";
    secretWordChange17();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton18 = document.getElementById('18');
alphabetButton18.addEventListener('click', () =>{
    alphabetButton18.className = "alphabet afterClicked";
    secretWordChange18();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton19 = document.getElementById('19');
alphabetButton19.addEventListener('click', () =>{
    alphabetButton19.className = "alphabet afterClicked";
    secretWordChange19();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton20 = document.getElementById('20');
alphabetButton20.addEventListener('click', () =>{
    alphabetButton20.className = "alphabet afterClicked";
    secretWordChange20();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
}, {once:true});

var alphabetButton21 = document.getElementById('21');
alphabetButton21.addEventListener('click', () =>{
    alphabetButton21.className = "alphabet afterClicked";
    secretWordChange21();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton22 = document.getElementById('22');
alphabetButton22.addEventListener('click', () =>{
    alphabetButton22.className = "alphabet afterClicked";
    secretWordChange22();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton23 = document.getElementById('23');
alphabetButton23.addEventListener('click', () =>{
    alphabetButton23.className = "alphabet afterClicked";
    secretWordChange23();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton24 = document.getElementById('24');
alphabetButton24.addEventListener('click', () =>{
    alphabetButton24.className = "alphabet afterClicked";
    secretWordChange24();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton25 = document.getElementById('25');
alphabetButton25.addEventListener('click', () =>{
    alphabetButton25.className = "alphabet afterClicked";
    secretWordChange25();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});

var alphabetButton26 = document.getElementById('26');
alphabetButton26.addEventListener('click', () =>{
    alphabetButton26.className = "alphabet afterClicked";
    secretWordChange26();
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff;
});
//console logs for testing values 
console.log(word);
console.log(secretWord);
console.log(secretWordDiff);
console.log(secretWordDiff[0]);
