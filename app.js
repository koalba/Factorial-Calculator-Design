'use strict'

const d = document

function writeFactorial(){
    let numValue = +d.querySelector('#number').value
    let nodeResult = d.querySelector('.result')
    
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

d.querySelector('.main__button').addEventListener('click', writeFactorial)
