function oneThroughTwenty() {
  let soma = ''
  for (let i = 0; i < 20; i++) {
    soma += i + ' '
  }
  return soma
}
console.log("oneToTwenty", oneThroughTwenty())

function evensToTwenty() {
  let par = ''
  for (let i = 0; i <= 20; i += 2) {
    par += i + ' '
  }
  return par;
}
console.log("even", evensToTwenty())

function oddsToTwenty() {
  let impar = ''
  for (let i = 1; i <= 20; i += 2) {
    impar += i + ' '
  }
  return impar;
}
console.log("odds", oddsToTwenty())

function multiplesOfFive() {
  let cinco = ''
  for (let i = 0; i <= 100; i += 5) {
    cinco += i + ' '
  }
  return cinco;
}
console.log("oneToOneHundred", multiplesOfFive())

function squareNumbers() {
  let quadrados = ''
  for (let i = 1; i <= 10; i++) {
    quadrados += i * i  + ' '}
    return quadrados
  }
console.log("quadrados", squareNumbers())

function countingBackwards() {
  let amos = ''
  for (let i = 20; i > 0; i--) {
    amos += i + ' '
  }
  return amos
}
console.log("twentyToOne", countingBackwards())

function evenNumbersBackwards() {
  let parback = ''
  for (let i = 20; i > 0; i -= 2) {
    parback += i + ' '
  }
  return parback;
}
console.log("evenback", evenNumbersBackwards())

function oddNumbersBackwards() {
  let imparback = ''
  for (let i = 19; i > 0; i -= 2) {
    imparback += i + ' '
  }
  return imparback;
}
console.log("oddsback", oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let impaback
  for (let i = 100; i > 0; i -= 5) {
    impaback += i + ' '
  }
  return impaback;
  }
console.log("voltacinco", multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let quadrados = ''
  for (let i = 10; i > 1; i--) {
    quadrados += i * i  + ' '}
    return quadrados
  }
console.log("quadradoinversoi", squareNumbersBackwards())