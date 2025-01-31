function oneThroughTwenty(num) {
    let count = []
   for(let i = 1; i <=num; i++){
      count.push(i)
   }
   return count
   
}

console.log(oneThroughTwenty(20))

/* ------------------------------------ */

function evensToTwenty(num) {
    let par = []
    for(let i = 1; i <=num; i++){
      if(i % 2 == 0){
        par.push(i)
      }
    }
  return par
}

console.log(evensToTwenty(20))

/* ------------------------------------ */

function oddsToTwenty(num) {
    let impar = []
    for(let i = 1; i <=num; i++){
      if(i % 2 !== 0){
        impar.push(i)
      }
    }
   return impar
}

console.log(oddsToTwenty(20))

/* ------------------------------------ */

function multiplesOfFive(num) {
    let multiplo = []
    for(let i = 5; i <= num; i++){
      if(i % 5 == 0){
        multiplo.push(i)
      }
    }
    return multiplo
}

console.log(multiplesOfFive(100))

/* ------------------------------------ */

function squareNumbers(num) {
    let quadrado = []
    for(let i = 1; i <= num; i++){
      if(Math.sqrt(i) % 1 == 0){
        quadrado.push(i)
      }
    }
    return quadrado
}

console.log(squareNumbers(100))

/* ------------------------------------ */

function countingBackwards(num) {
    let countBack = []
    for(let i = num; i >= 1; i--){
      countBack.push(i)
    }
    return countBack
}

console.log(countingBackwards(20))

/* ------------------------------------ */

function evenNumbersBackwards(num) {
    let parInverso= []
    for(let i = num; i >= 1; i-- ){
      if(i % 2 == 0){
        parInverso.push(i)
      }
    }
    return parInverso
}

console.log(evenNumbersBackwards(20))

/* ------------------------------------ */

function oddNumbersBackwards(num) {
    let imparInverso = []
    for(let i = num; i >= 1; i--){
      if(i % 2 !== 0){
        imparInverso.push(i)
      }
    } 
    return imparInverso
}

console.log(oddNumbersBackwards(20))

/* ------------------------------------ */

function multiplesOfFiveBackwards(num) {
    let multipliInverso = []
    for(let i = num; i >= 1; i--){
      if(i % 5 == 0){
        multipliInverso.push(i)
      }
    }
    return multipliInverso
}

console.log(multiplesOfFiveBackwards(100))

/* ------------------------------------ */

function squareNumbersBackwards(num) {
    let quadradoInverso = []
    for(let i = num; i >= 1; i--){
      if(Math.sqrt(i) % 1 == 0){
        quadradoInverso.push(i)
      }
    }
    return quadradoInverso
}

console.log(squareNumbersBackwards(100))