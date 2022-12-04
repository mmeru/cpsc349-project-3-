export function checkStorage () {
  if (!window.localStorage.getItem('1')) {
    console.log('local storage not found, creating')
    initStorage()
  } else {
    console.log('local storage found, retrieving')
    restorePage()
  }
}

export function initStorage () {
  window.localStorage.setItem('1', '')
  window.localStorage.setItem('2', '')
  window.localStorage.setItem('3', '')
  window.localStorage.setItem('4', '')
  window.localStorage.setItem('5', '')
  window.localStorage.setItem('6', '')
  window.localStorage.setItem('7', '')
  window.localStorage.setItem('8', '')
  window.localStorage.setItem('9', '')
  window.localStorage.setItem('10', '')
  window.localStorage.setItem('11', '')
  window.localStorage.setItem('12', '')
  window.localStorage.setItem('13', '')
  window.localStorage.setItem('14', '')
  window.localStorage.setItem('15', '')
  window.localStorage.setItem('16', '')
  window.localStorage.setItem('17', '')
  window.localStorage.setItem('18', '')
  window.localStorage.setItem('19', '')
  window.localStorage.setItem('20', '')
  window.localStorage.setItem('21', '')
  window.localStorage.setItem('22', '')
  window.localStorage.setItem('23', '')
  window.localStorage.setItem('24', '')
  window.localStorage.setItem('25', '')
  window.localStorage.setItem('26', '')

  window.localStorage.setItem('img1', 'show')
  window.localStorage.setItem('img2', 'hidden')
  window.localStorage.setItem('img3', 'hidden')
  window.localStorage.setItem('img4', 'hidden')
  window.localStorage.setItem('img5', 'hidden')
  window.localStorage.setItem('img6', 'hidden')
  window.localStorage.setItem('img7', 'hidden')

  window.localStorage.setItem('h2', ' ')
}

export function writeStorageLetter (newID) {
  window.localStorage.setItem(newID, document.getElementById(newID).style.display)

  console.log('writeStorageLetter Called')
}

export function writeStorageImg () {
  window.localStorage.setItem('img1', document.getElementById('img1').className)
  window.localStorage.setItem('img2', document.getElementById('img2').className)
  window.localStorage.setItem('img3', document.getElementById('img3').className)
  window.localStorage.setItem('img4', document.getElementById('img4').className)
  window.localStorage.setItem('img5', document.getElementById('img5').className)
  window.localStorage.setItem('img6', document.getElementById('img6').className)
  window.localStorage.setItem('img7', document.getElementById('img7').className)

  console.log('writeStorageImg Called')
}

export function writeStorageWord () {
  window.localStorage.setItem('h2', document.querySelector('h2').innerHTML)
}

export function restorePage () {
  const alphaA = window.localStorage.getItem('1')
  const alphaB = window.localStorage.getItem('2')
  const alphaC = window.localStorage.getItem('3')
  const alphaD = window.localStorage.getItem('4')
  const alphaE = window.localStorage.getItem('5')
  const alphaF = window.localStorage.getItem('6')
  const alphaG = window.localStorage.getItem('7')
  const alphaH = window.localStorage.getItem('8')
  const alphaI = window.localStorage.getItem('9')
  const alphaJ = window.localStorage.getItem('10')
  const alphaK = window.localStorage.getItem('11')
  const alphaL = window.localStorage.getItem('12')
  const alphaM = window.localStorage.getItem('13')
  const alphaN = window.localStorage.getItem('14')
  const alphaO = window.localStorage.getItem('15')
  const alphaP = window.localStorage.getItem('16')
  const alphaQ = window.localStorage.getItem('17')
  const alphaR = window.localStorage.getItem('18')
  const alphaS = window.localStorage.getItem('19')
  const alphaT = window.localStorage.getItem('20')
  const alphaU = window.localStorage.getItem('21')
  const alphaV = window.localStorage.getItem('22')
  const alphaW = window.localStorage.getItem('23')
  const alphaX = window.localStorage.getItem('24')
  const alphaY = window.localStorage.getItem('25')
  const alphaZ = window.localStorage.getItem('26')

  const image1 = window.localStorage.getItem('img1')
  const image2 = window.localStorage.getItem('img2')
  const image3 = window.localStorage.getItem('img3')
  const image4 = window.localStorage.getItem('img4')
  const image5 = window.localStorage.getItem('img5')
  const image6 = window.localStorage.getItem('img6')
  const image7 = window.localStorage.getItem('img7')

  const guessWord = window.localStorage.getItem('h2')

  document.getElementById('1').style.display = alphaA
  document.getElementById('2').style.display = alphaB
  document.getElementById('3').style.display = alphaC
  document.getElementById('4').style.display = alphaD
  document.getElementById('5').style.display = alphaE
  document.getElementById('6').style.display = alphaF
  document.getElementById('7').style.display = alphaG
  document.getElementById('8').style.display = alphaH
  document.getElementById('9').style.display = alphaI
  document.getElementById('10').style.display = alphaJ
  document.getElementById('11').style.display = alphaK
  document.getElementById('12').style.display = alphaL
  document.getElementById('13').style.display = alphaM
  document.getElementById('14').style.display = alphaN
  document.getElementById('15').style.display = alphaO
  document.getElementById('16').style.display = alphaP
  document.getElementById('17').style.display = alphaQ
  document.getElementById('18').style.display = alphaR
  document.getElementById('19').style.display = alphaS
  document.getElementById('20').style.display = alphaT
  document.getElementById('21').style.display = alphaU
  document.getElementById('22').style.display = alphaV
  document.getElementById('23').style.display = alphaW
  document.getElementById('24').style.display = alphaX
  document.getElementById('25').style.display = alphaY
  document.getElementById('26').style.display = alphaZ

  document.getElementById('img1').className = image1
  document.getElementById('img2').className = image2
  document.getElementById('img3').className = image3
  document.getElementById('img4').className = image4
  document.getElementById('img5').className = image5
  document.getElementById('img6').className = image6
  document.getElementById('img7').className = image7

  document.querySelector('h2').innerHTML = guessWord

  console.log('restorePage Called')
}
