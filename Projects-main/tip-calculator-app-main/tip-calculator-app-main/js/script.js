let bill = document.querySelector('#bill')
let numPeople = document.querySelector('#people')
const tipFive = document.querySelector('.five')
const tipTen = document.querySelector('.ten')
const tipFifteen = document.querySelector('.fifteen')
const tipTwentyFive = document.querySelector('.twentyFive')
const tipFifty = document.querySelector('.fifty')
let tipCustom = document.querySelector('#custom')


const billInput = () => {
    let billAmount = bill.value;
    console.log(billAmount);
}

const peopleInput = () => {
    let peopleAmount = numPeople.value;
    console.log(peopleAmount);
}









bill.addEventListener('input', billInput)
numPeople.addEventListener('input', peopleInput)








