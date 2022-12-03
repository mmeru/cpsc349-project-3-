/*import {
  alphabetButton1, alphabetButton2, alphabetButton3, alphabetButton4, alphabetButton5, alphabetButton6,
  alphabetButton7, alphabetButton8, alphabetButton9, alphabetButton10, alphabetButton11, alphabetButton12,
  alphabetButton13, alphabetButton14, alphabetButton15, alphabetButton16, alphabetButton17, alphabetButton18,
  alphabetButton19, alphabetButton20, alphabetButton21, alphabetButton22, alphabetButton23, alphabetButton24,
  alphabetButton25, alphabetButton26
} from '../../modules/letterButtons.js' */
import { word } from '../main.js'
// Make the program choose a random word
export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export const guesses = ['CAT', 'PANDA', 'MONKEY', 'BIRD']
export const arrayOfImages = []
const soundNope = new window.Audio('/sound-effects/nope.mp3')
const soundYeah = new window.Audio('/sound-effects/Yeah.mp3')
// Image source https://www.oligalma.com/en/downloads/images/hangman
arrayOfImages.push('/hangman-images/10.jpg')
arrayOfImages.push('/hangman-images/9.jpg')
arrayOfImages.push('/hangman-images/8.jpg')
arrayOfImages.push('/hangman-images/7.jpg')
arrayOfImages.push('/hangman-images/6.jpg')
arrayOfImages.push('/hangman-images/5.jpg')
arrayOfImages.push('/hangman-images/4.jpg')

export const secretWord = []
export const secretWordDiff = []

/*
for (let i=0; i<word.length; i++){
    if (alphabet.includes(word[i])){
        secretWordDiff.push('_');
    }
}
*/

export function resetArray (array) {
  array.splice(0, array.length)
}

// Make the underscores appear for each letter
export function hiddenWord (word) {
  for (let i = 0; i < word.length; i++) {
    if (alphabet.includes(word[i])) {
      secretWord.push('_')
    }
  }
}
// Make a function to recognize each letter and set the array to the new letter instead of the _ it has
export function secretWordChange () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton1.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  // checks if the word has the letter or pops the end of the array
  if (!(word.includes(alphabetButton1.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange2 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton2.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }// checks if the word has the letter or pops the end of the array
  if (!(word.includes(alphabetButton2.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange3 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton3.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton3.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange4 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton4.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton4.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange5 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton5.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton5.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange6 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton6.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton6.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange7 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton7.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton7.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange8 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton8.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton8.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange9 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton9.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton9.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange10 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton10.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton10.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange11 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton11.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton11.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange12 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton12.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton12.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange13 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton13.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton13.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange14 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton14.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton14.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange15 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton15.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton15.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange16 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton16.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton16.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange17 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton17.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton17.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange18 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton18.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton18.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange19 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton19.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton19.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange20 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton20.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton20.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange21 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton21.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton21.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange22 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton22.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton22.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange23 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton23.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton23.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange24 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton24.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton24.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange25 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton25.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton25.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}

export function secretWordChange26 () {
  for (let i = 0; i < word.length; i++) {
    if (secretWordDiff[i] === secretWord[i]) {
      if (word[i].includes(alphabetButton26.innerHTML)) {
        secretWordDiff[i] = word[i]
        soundYeah.play()
      }
    }
  }
  if (!(word.includes(alphabetButton26.innerHTML))) {
    arrayOfImages.pop()
    soundNope.play()
  }
}
