//Make the program choose a random word
export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const guesses = ['CAT', 'DOG', 'COW']; 
export const word = guesses[Math.floor(Math.random() * guesses.length)];
export var secretWord = '';

//Make the underscores appear for each letter 
export function hiddenWord(word){
    for (let i=0; i<word.length; i++){
        if (alphabet.includes(word[i])){
            secretWord = secretWord+ '_'+'\t';
        }
    }
}