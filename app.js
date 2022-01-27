'use strict'

function writeFactorial(){
    let numValue = +document.querySelector('#number').value
    let nodeResult = document.querySelector('.result')

    nodeResult.classList.add('active')
    nodeResult.firstChild.innerHTML = calcFactorial(numValue)
}

function calcFactorial (number){
    let total = number

    for( let i = number - 1; i > 0 && i < number; i--){
        total *= i
    }

    return total
}
