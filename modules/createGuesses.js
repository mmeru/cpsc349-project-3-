/* import {
  alphabetButton1, alphabetButton2, alphabetButton3, alphabetButton4, alphabetButton5, alphabetButton6,
  alphabetButton7, alphabetButton8, alphabetButton9, alphabetButton10, alphabetButton11, alphabetButton12,
  alphabetButton13, alphabetButton14, alphabetButton15, alphabetButton16, alphabetButton17, alphabetButton18,
  alphabetButton19, alphabetButton20, alphabetButton21, alphabetButton22, alphabetButton23, alphabetButton24,
  alphabetButton25, alphabetButton26
} from '../../modules/letterButtons.js' */
// Make the program choose a random word
export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export const guesses = ['CAT', 'PANDA', 'MONKEY', 'BIRD']
export const arrayOfImages = []
const soundNope = new window.Audio('https://github.com/Angel-Armendariz/cpsc349-project-3-/blob/main/sound-effects/nope.mp3?raw=true')
const soundYeah = new window.Audio('https://github.com/Angel-Armendariz/cpsc349-project-3-/blob/main/sound-effects/Yeah.mp3?raw=true')

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
export let word = guesses[Math.floor(Math.random() * guesses.length)]
for (let i = 0; i < word.length; i++) {
  if (alphabet.includes(word[i])) {
    secretWordDiff.push('_')
  }
}
/*
for (let i=0; i<word.length; i++){
    if (alphabet.includes(word[i])){
        secretWordDiff.push('_');
    }
}
*/
//reset the word 
export function resetWord(){
  word = guesses[Math.floor(Math.random() * guesses.length)]
}

// Make the underscores appear for each letter
export function hiddenWord (word) {
  for (let i = 0; i < word.length; i++) {
    if (alphabet.includes(word[i])) {
      secretWord.push('_')
    }
  }
}

// Make the buttons unclickable after being clicked once
export const alphabetButton1 = document.getElementById('1')
alphabetButton1.addEventListener('click', () => {
  alphabetButton1.className = 'alphabet afterClicked'
})
export const alphabetButton2 = document.getElementById('2')
alphabetButton2.addEventListener('click', () => {
  alphabetButton2.className = 'alphabet afterClicked'
})

export const alphabetButton3 = document.getElementById('3')
alphabetButton3.addEventListener('click', () => {
  alphabetButton3.className = 'alphabet afterClicked'
})

export const alphabetButton4 = document.getElementById('4')
alphabetButton4.addEventListener('click', () => {
  alphabetButton4.className = 'alphabet afterClicked'
})

export const alphabetButton5 = document.getElementById('5')
alphabetButton5.addEventListener('click', () => {
  alphabetButton5.className = 'alphabet afterClicked'
})

export const alphabetButton6 = document.getElementById('6')
alphabetButton6.addEventListener('click', () => {
  alphabetButton6.className = 'alphabet afterClicked'
})

export const alphabetButton7 = document.getElementById('7')
alphabetButton7.addEventListener('click', () => {
  alphabetButton7.className = 'alphabet afterClicked'
})

export const alphabetButton8 = document.getElementById('8')
alphabetButton8.addEventListener('click', () => {
  alphabetButton8.className = 'alphabet afterClicked'
})

export const alphabetButton9 = document.getElementById('9')
alphabetButton9.addEventListener('click', () => {
  alphabetButton9.className = 'alphabet afterClicked'
})

export const alphabetButton10 = document.getElementById('10')
alphabetButton10.addEventListener('click', () => {
  alphabetButton10.className = 'alphabet afterClicked'
})

export const alphabetButton11 = document.getElementById('11')
alphabetButton11.addEventListener('click', () => {
  alphabetButton11.className = 'alphabet afterClicked'
})

export const alphabetButton12 = document.getElementById('12')
alphabetButton12.addEventListener('click', () => {
  alphabetButton12.className = 'alphabet afterClicked'
})

export const alphabetButton13 = document.getElementById('13')
alphabetButton13.addEventListener('click', () => {
  alphabetButton13.className = 'alphabet afterClicked'
})

export const alphabetButton14 = document.getElementById('14')
alphabetButton14.addEventListener('click', () => {
  alphabetButton14.className = 'alphabet afterClicked'
})

export const alphabetButton15 = document.getElementById('15')
alphabetButton15.addEventListener('click', () => {
  alphabetButton15.className = 'alphabet afterClicked'
})

export const alphabetButton16 = document.getElementById('16')
alphabetButton16.addEventListener('click', () => {
  alphabetButton16.className = 'alphabet afterClicked'
})

export const alphabetButton17 = document.getElementById('17')
alphabetButton17.addEventListener('click', () => {
  alphabetButton17.className = 'alphabet afterClicked'
})

export const alphabetButton18 = document.getElementById('18')
alphabetButton18.addEventListener('click', () => {
  alphabetButton18.className = 'alphabet afterClicked'
})

export const alphabetButton19 = document.getElementById('19')
alphabetButton19.addEventListener('click', () => {
  alphabetButton19.className = 'alphabet afterClicked'
})

export const alphabetButton20 = document.getElementById('20')
alphabetButton20.addEventListener('click', () => {
  alphabetButton20.className = 'alphabet afterClicked'
})

export const alphabetButton21 = document.getElementById('21')
alphabetButton21.addEventListener('click', () => {
  alphabetButton21.className = 'alphabet afterClicked'
})

export const alphabetButton22 = document.getElementById('22')
alphabetButton22.addEventListener('click', () => {
  alphabetButton22.className = 'alphabet afterClicked'
})

export const alphabetButton23 = document.getElementById('23')
alphabetButton23.addEventListener('click', () => {
  alphabetButton23.className = 'alphabet afterClicked'
})

export const alphabetButton24 = document.getElementById('24')
alphabetButton24.addEventListener('click', () => {
  alphabetButton24.className = 'alphabet afterClicked'
})

export const alphabetButton25 = document.getElementById('25')
alphabetButton25.addEventListener('click', () => {
  alphabetButton25.className = 'alphabet afterClicked'
})

export const alphabetButton26 = document.getElementById('26')
alphabetButton26.addEventListener('click', () => {
  alphabetButton26.className = 'alphabet afterClicked'
})

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
