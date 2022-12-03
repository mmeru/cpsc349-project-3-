//For modules you create another JS file and use export default on the main class and export on the functions as a prefix
//To import these modules you would for example say import User from '/user.js' if the default class was User
//There are repeats among the modules because the modules were giving me problems so I put everything in main for now
//Another way shown in MDN web docs is export { name, draw, reportArea, reportPerimeter }; on the module and import { name, draw, reportArea, reportPerimeter } from './modules/square.js'; in the JS file
/*
Tasks in JS:
1.Make the underscores appear in the guesses div with the DOM -Done by Angel 
2.Make the buttons unclickable after being clicked once - Done by Angel
3.Make the buttons correspond with the letters in the word - Done by Angel
4.Make the image change when a wrong letter is chosen- Done by Angel 
5.Make the lose/win conditions
6.Create the winner/loser screen in html/css to trigger on loss/win
7.Make the chosen correct letter replace the underscores - Done by Angel
8.Make the program choose a random word from the bank -Done by Angel
9.Make the reset button feature
10.Make the progress able to be saved after closing with window.localStorage
*/
import {alphabetButton1, alphabetButton2, alphabetButton3, alphabetButton4, alphabetButton5, alphabetButton6, alphabetButton7, alphabetButton8, alphabetButton9, alphabetButton10, alphabetButton11, alphabetButton12,
    alphabetButton13, alphabetButton14, alphabetButton15, alphabetButton16, alphabetButton17, alphabetButton18, alphabetButton19, alphabetButton20, alphabetButton21, alphabetButton22, alphabetButton23, alphabetButton24, alphabetButton25, alphabetButton26} from './modules/letterButtons.js';

import { guesses,word, hiddenWord, alphabet, secretWord, secretWordChange, secretWordDiff, secretWordChange2, secretWordChange3, secretWordChange4,
        secretWordChange5, secretWordChange6, secretWordChange7, secretWordChange8, secretWordChange9, secretWordChange10, secretWordChange11,
        secretWordChange12, secretWordChange13, secretWordChange14, secretWordChange15, secretWordChange16, secretWordChange17, secretWordChange18,
        secretWordChange19, secretWordChange20, secretWordChange21, secretWordChange22, secretWordChange23, secretWordChange24, secretWordChange25, secretWordChange26, arrayOfImages} from './modules/createGuesses.js';
        
import {checkStorage, initStorage, writeStorageLetter, writeStorageImg, writeStorageWord, restorePage} from './modules/saveState.js';

//printing out the underscores based on how many letters are in the chosen word
hiddenWord(word);

const guessClass = document.getElementById('guesses');
const newGuess = document.createElement('h2');
const img = document.getElementById('img1');
const imgsrc = document.getElementById('img1').src;
const img2 = document.getElementById('img2');
const img2src = document.getElementById('img2').src;
const img3 = document.getElementById('img3');
const img3src = document.getElementById('img3').src;
const img4 = document.getElementById('img4');
const img4src = document.getElementById('img4').src;
const img5 = document.getElementById('img5');
const img5src = document.getElementById('img5').src;
const img6 = document.getElementById('img6');
const img6src = document.getElementById('img6').src;
const img7 = document.getElementById('img7');
const img7src = document.getElementById('img7').src;
var newGuessContent = document.createTextNode(secretWord.join(" "));
guessClass.append(newGuess);
newGuess.append(newGuessContent);
//Make buttons only clickable once 
//secretWordChange changes the letter during the click event 
alphabetButton1 = document.getElementById('1');
//This onclick event triggers for the alphabet 'A' key 
alphabetButton1.addEventListener('click', () =>{
    alphabetButton1.className = "alphabet afterClicked";
    document.getElementById('1').style.display = "none";
    //call letter change    
    secretWordChange();
    //change image to the new image if the answer is wrong by checking each image value against array
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    //set the html to the new values using the DOM
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(1);
    writeStorageImg();
    writeStorageWord();
}, {once:true});

alphabetButton2 = document.getElementById('2');
alphabetButton2.addEventListener('click', () =>{
    alphabetButton2.className = "alphabet afterClicked";
    document.getElementById('2').style.display = "none";
    secretWordChange2();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(2);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton3 = document.getElementById('3');
alphabetButton3.addEventListener('click', () =>{
    alphabetButton3.className = "alphabet afterClicked";
    document.getElementById('3').style.display = "none";
    secretWordChange3();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(3);
    writeStorageImg();
    writeStorageWord();
}, {once:true});

var alphabetButton4 = document.getElementById('4');
alphabetButton4.addEventListener('click', () =>{
    alphabetButton4.className = "alphabet afterClicked";
    document.getElementById('4').style.display = "none";
    secretWordChange4();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(4);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton5 = document.getElementById('5');
alphabetButton5.addEventListener('click', () =>{
    alphabetButton5.className = "alphabet afterClicked";
    document.getElementById('5').style.display = "none";
    secretWordChange5();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(5);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton6 = document.getElementById('6');
alphabetButton6.addEventListener('click', () =>{
    alphabetButton6.className = "alphabet afterClicked";
    document.getElementById('6').style.display = "none";
    secretWordChange6();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(6);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton7 = document.getElementById('7');
alphabetButton7.addEventListener('click', () =>{
    alphabetButton7.className = "alphabet afterClicked";
    document.getElementById('7').style.display = "none";
    secretWordChange7();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(7);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton8 = document.getElementById('8');
alphabetButton8.addEventListener('click', () =>{
    alphabetButton8.className = "alphabet afterClicked";
    document.getElementById('8').style.display = "none";
    secretWordChange8();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(8);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton9 = document.getElementById('9');
alphabetButton9.addEventListener('click', () =>{
    alphabetButton9.className = "alphabet afterClicked";
    document.getElementById('9').style.display = "none";
    secretWordChange9();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(9);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton10 = document.getElementById('10');
alphabetButton10.addEventListener('click', () =>{
    alphabetButton10.className = "alphabet afterClicked";
    document.getElementById('10').style.display = "none";
    secretWordChange10();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(10);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton11 = document.getElementById('11');
alphabetButton11.addEventListener('click', () =>{
    alphabetButton11.className = "alphabet afterClicked";
    document.getElementById('11').style.display = "none";
    secretWordChange11();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(11);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton12 = document.getElementById('12');
alphabetButton12.addEventListener('click', () =>{
    alphabetButton12.className = "alphabet afterClicked";
    document.getElementById('12').style.display = "none";
    secretWordChange12();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(12);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton13 = document.getElementById('13');
alphabetButton13.addEventListener('click', () =>{
    alphabetButton13.className = "alphabet afterClicked";
    document.getElementById('13').style.display = "none";
    secretWordChange13();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(13);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton14 = document.getElementById('14');
alphabetButton14.addEventListener('click', () =>{
    alphabetButton14.className = "alphabet afterClicked";
    document.getElementById('14').style.display = "none";
    secretWordChange14();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(14);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton15 = document.getElementById('15');
alphabetButton15.addEventListener('click', () =>{
    alphabetButton15.className = "alphabet afterClicked";
    document.getElementById('15').style.display = "none";
    secretWordChange15();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(15);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton16 = document.getElementById('16');
alphabetButton16.addEventListener('click', () =>{
    alphabetButton16.className = "alphabet afterClicked";
    document.getElementById('16').style.display = "none";
    secretWordChange16();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(16);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton17 = document.getElementById('17');
alphabetButton17.addEventListener('click', () =>{
    alphabetButton17.className = "alphabet afterClicked";
    document.getElementById('17').style.display = "none";
    secretWordChange17();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(17);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton18 = document.getElementById('18');
alphabetButton18.addEventListener('click', () =>{
    alphabetButton18.className = "alphabet afterClicked";
    document.getElementById('18').style.display = "none";
    secretWordChange18();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(18);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton19 = document.getElementById('19');
alphabetButton19.addEventListener('click', () =>{
    alphabetButton19.className = "alphabet afterClicked";
    document.getElementById('19').style.display = "none";
    secretWordChange19();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(19);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton20 = document.getElementById('20');
alphabetButton20.addEventListener('click', () =>{
    alphabetButton20.className = "alphabet afterClicked";
    document.getElementById('20').style.display = "none";
    secretWordChange20();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(20);
    writeStorageImg();
    writeStorageWord();
}, {once:true});

var alphabetButton21 = document.getElementById('21');
alphabetButton21.addEventListener('click', () =>{
    alphabetButton21.className = "alphabet afterClicked";
    document.getElementById('21').style.display = "none";
    secretWordChange21();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(21);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton22 = document.getElementById('22');
alphabetButton22.addEventListener('click', () =>{
    alphabetButton22.className = "alphabet afterClicked";
    document.getElementById('22').style.display = "none";
    secretWordChange22();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(22);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton23 = document.getElementById('23');
alphabetButton23.addEventListener('click', () =>{
    alphabetButton23.className = "alphabet afterClicked";
    document.getElementById('23').style.display = "none";
    secretWordChange23();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(23);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton24 = document.getElementById('24');
alphabetButton24.addEventListener('click', () =>{
    alphabetButton24.className = "alphabet afterClicked";
    document.getElementById('24').style.display = "none";
    secretWordChange24();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(24);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton25 = document.getElementById('25');
alphabetButton25.addEventListener('click', () =>{
    alphabetButton25.className = "alphabet afterClicked";
    document.getElementById('25').style.display = "none";
    secretWordChange25();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(25);
    writeStorageImg();
    writeStorageWord();
});

var alphabetButton26 = document.getElementById('26');
alphabetButton26.addEventListener('click', () =>{
    alphabetButton26.className = "alphabet afterClicked";
    document.getElementById('26').style.display = "none";
    secretWordChange26();
    var temp = arrayOfImages.length;
    if(!(imgsrc.includes(arrayOfImages[temp-1]))){
        img.className = "hidden";
    }
    else img.className = "show";
    if(img2src.includes(arrayOfImages[temp-1])){
        img2.className = "show";
    } 
    else img2.className = "hidden";
    if(img3src.includes(arrayOfImages[temp-1])){
        img3.className = "show";
    } 
    else img3.className = "hidden";
    if(img4src.includes(arrayOfImages[temp-1])){
        img4.className = "show";
    } 
    else img4.className = "hidden";
    if(img5src.includes(arrayOfImages[temp-1])){
        img5.className = "show";
    } 
    else img5.className = "hidden";
    if(img6src.includes(arrayOfImages[temp-1])){
        img6.className = "show";
    } 
    else img6.className = "hidden";
    if(img7src.includes(arrayOfImages[temp-1])){
        img7.className = "show";
    } 
    else img7.className = "hidden";
    newGuessContent.innerHTML = document.querySelector('h2').innerHTML = secretWordDiff.join(" ");
    writeStorageLetter(26);
    writeStorageImg();
    writeStorageWord();
});

checkStorage();

//console logs for testing values 
console.log(word);
console.log(arrayOfImages);
console.log(img.innerHTML);
