import {alphabetButton1, alphabetButton2, alphabetButton3, alphabetButton4, alphabetButton5, alphabetButton6,
        alphabetButton7, alphabetButton8, alphabetButton9, alphabetButton10, alphabetButton11, alphabetButton12,
        alphabetButton13, alphabetButton14, alphabetButton15, alphabetButton16, alphabetButton17, alphabetButton18,
        alphabetButton19, alphabetButton20, alphabetButton21, alphabetButton22, alphabetButton23, alphabetButton24,
        alphabetButton25, alphabetButton26} from "/modules/letterButtons.js";
//Make the program choose a random word
export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const guesses = ['CAT']; 
export const word = guesses[Math.floor(Math.random() * guesses.length)];
export var secretWord = [];
export var secretWordDiff = [];
for (let i=0; i<word.length; i++){
    if (alphabet.includes(word[i])){
        secretWordDiff.push('_');
    }
}
//Make the underscores appear for each letter 
export function hiddenWord(word){
    for (let i=0; i<word.length; i++){
        if (alphabet.includes(word[i])){
            secretWord.push('_');
        }
    }
}
//Make a function to recognize each letter and set the array to the new letter instead of the _ it has 
export function secretWordChange(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton1.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange2(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton2.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange3(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton3.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange4(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton4.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange5(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton5.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange6(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton6.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange7(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton7.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange8(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton8.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange9(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton9.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange10(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton10.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange11(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton11.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange12(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton12.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange13(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton13.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange14(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton14.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange15(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton15.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange16(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton16.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange17(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton17.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange18(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton18.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange19(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton19.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange20(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton20.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange21(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton21.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange22(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton22.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange23(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton23.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange24(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton24.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange25(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton25.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}

export function secretWordChange26(){
    for (let i=0; i<word.length; i++){
        if(secretWordDiff[i] == secretWord[i])
        {        
            if (word[i].includes(alphabetButton26.innerHTML)){
                secretWordDiff[i] = word[i];
        }
        }
    }
}