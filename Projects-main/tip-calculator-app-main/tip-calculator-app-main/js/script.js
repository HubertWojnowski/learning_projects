let bill = document.querySelector('#bill')
let numPeople = document.querySelector('#people')
const tipFive = document.querySelector('.five')
const tipTen = document.querySelector('.ten')
const tipFifteen = document.querySelector('.fifteen')
const tipTwentyFive = document.querySelector('.twentyFive')
const tipFifty = document.querySelector('.fifty')
let tipCustom = document.querySelector('#custom')
const resetBtn = document.querySelector('.resetBtn')


const billInput = () => {
    let billAmount = bill.value;
    console.log(billAmount);
}

const customTip = () => {
    let custom = tipCustom.value;
    console.log(custom);

}

const peopleInput = () => {
    let peopleAmount = numPeople.value;
    console.log(peopleAmount);
}

const calculateTipFive = () => {
    let billAmount = parseFloat(bill.value);
    let tipAmount = billAmount * 0.05;
    console.log(tipAmount);
}

const calculateTipTen = () => {
    let billAmount = parseFloat(bill.value);
    let tipAmount = billAmount * 0.1;
    console.log(tipAmount);
}

const calculateTipFifteen = () => {
    let billAmount = parseFloat(bill.value);
    let tipAmount = billAmount * 0.15;
    console.log(tipAmount);
}

const calculateTipTwentyFive = () => {
    let billAmount = parseFloat(bill.value);
    let tipAmount = billAmount * 0.25;
    console.log(tipAmount);
}

const calculateTipFifty = () => {
    let billAmount = parseFloat(bill.value);
    let tipAmount = billAmount * 0.5;
    console.log(tipAmount);
}

const resetValues = () => {
    bill.value = ' '
    numPeople.value = ' '
    tipCustom.value = ' '
}









bill.addEventListener('input', billInput)
tipCustom.addEventListener('input', customTip)
numPeople.addEventListener('input', peopleInput)
tipFive.addEventListener('click', calculateTipFive);
tipTen.addEventListener('click', calculateTipTen);
tipFifteen.addEventListener('click', calculateTipFifteen);
tipTwentyFive.addEventListener('click', calculateTipTwentyFive);
tipFifty.addEventListener('click', calculateTipFifty);
resetBtn.addEventListener('click', resetValues);








