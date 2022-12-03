export function checkStorage () {
  if (!localStorage.getItem('1')) {
	  console.log('local storage not found, creating')
	  initStorage()
  } else {
	  console.log('local storage found, retrieving')
	  restorePage()
  }
}

export function initStorage () {
  localStorage.setItem('1', '')
  localStorage.setItem('2', '')
  localStorage.setItem('3', '')
  localStorage.setItem('4', '')
  localStorage.setItem('5', '')
  localStorage.setItem('6', '')
  localStorage.setItem('7', '')
  localStorage.setItem('8', '')
  localStorage.setItem('9', '')
  localStorage.setItem('10', '')
  localStorage.setItem('11', '')
  localStorage.setItem('12', '')
  localStorage.setItem('13', '')
  localStorage.setItem('14', '')
  localStorage.setItem('15', '')
  localStorage.setItem('16', '')
  localStorage.setItem('17', '')
  localStorage.setItem('18', '')
  localStorage.setItem('19', '')
  localStorage.setItem('20', '')
  localStorage.setItem('21', '')
  localStorage.setItem('22', '')
  localStorage.setItem('23', '')
  localStorage.setItem('24', '')
  localStorage.setItem('25', '')
  localStorage.setItem('26', '')

  localStorage.setItem('img1', 'show')
  localStorage.setItem('img2', 'hidden')
  localStorage.setItem('img3', 'hidden')
  localStorage.setItem('img4', 'hidden')
  localStorage.setItem('img5', 'hidden')
  localStorage.setItem('img6', 'hidden')
  localStorage.setItem('img7', 'hidden')

  localStorage.setItem('h2', ' ')
}

export function writeStorageLetter (newID) {
  localStorage.setItem(newID, document.getElementById(newID).style.display)

  console.log('writeStorageLetter Called')
}

export function writeStorageImg () {
  localStorage.setItem('img1', document.getElementById('img1').className)
  localStorage.setItem('img2', document.getElementById('img2').className)
  localStorage.setItem('img3', document.getElementById('img3').className)
  localStorage.setItem('img4', document.getElementById('img4').className)
  localStorage.setItem('img5', document.getElementById('img5').className)
  localStorage.setItem('img6', document.getElementById('img6').className)
  localStorage.setItem('img7', document.getElementById('img7').className)

  console.log('writeStorageImg Called')
}

export function writeStorageWord () {
  localStorage.setItem('h2', document.querySelector('h2').innerHTML)
}

export function restorePage () {
  const alphaA = localStorage.getItem('1')
  const alphaB = localStorage.getItem('2')
  const alphaC = localStorage.getItem('3')
  const alphaD = localStorage.getItem('4')
  const alphaE = localStorage.getItem('5')
  const alphaF = localStorage.getItem('6')
  const alphaG = localStorage.getItem('7')
  const alphaH = localStorage.getItem('8')
  const alphaI = localStorage.getItem('9')
  const alphaJ = localStorage.getItem('10')
  const alphaK = localStorage.getItem('11')
  const alphaL = localStorage.getItem('12')
  const alphaM = localStorage.getItem('13')
  const alphaN = localStorage.getItem('14')
  const alphaO = localStorage.getItem('15')
  const alphaP = localStorage.getItem('16')
  const alphaQ = localStorage.getItem('17')
  const alphaR = localStorage.getItem('18')
  const alphaS = localStorage.getItem('19')
  const alphaT = localStorage.getItem('20')
  const alphaU = localStorage.getItem('21')
  const alphaV = localStorage.getItem('22')
  const alphaW = localStorage.getItem('23')
  const alphaX = localStorage.getItem('24')
  const alphaY = localStorage.getItem('25')
  const alphaZ = localStorage.getItem('26')

  const image1 = localStorage.getItem('img1')
  const image2 = localStorage.getItem('img2')
  const image3 = localStorage.getItem('img3')
  const image4 = localStorage.getItem('img4')
  const image5 = localStorage.getItem('img5')
  const image6 = localStorage.getItem('img6')
  const image7 = localStorage.getItem('img7')

  const guessWord = localStorage.getItem('h2')

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
