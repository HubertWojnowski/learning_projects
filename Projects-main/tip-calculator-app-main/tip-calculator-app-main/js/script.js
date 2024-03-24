document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.getElementById('bill');
    const customTipInput = document.getElementById('custom');
    const numOfPeopleInput = document.getElementById('people');
    const tipButtons = document.querySelectorAll('.tipSelection button');
    const tipAmountNum = document.querySelector('.tipAmountNum');
    const totalNum = document.querySelector('.totalNum');
    const resetBtn = document.querySelector('.resetBtn');
  
    function resetValues() {
      billInput.value = '';
      customTipInput.value = '';
      numOfPeopleInput.value = '';
      tipAmountNum.textContent = '$0.00';
      totalNum.textContent = '$0.00';
    }
  
    function calculateTip(bill, tipPercentage, numOfPeople) {
      const tipAmount = bill * (tipPercentage / 100);
      const totalAmount = bill + tipAmount;
      const amountPerPerson = totalAmount / numOfPeople;
      return { tipAmount, totalAmount, amountPerPerson };
    }
  
    function updateResults(tipAmount, totalAmount) {
      tipAmountNum.textContent = `$${tipAmount.toFixed(2)}`;
      totalNum.textContent = `$${totalAmount.toFixed(2)}`;
    }
  
    function handleTipButtonClick(tipPercentage) {
      const bill = parseFloat(billInput.value);
      const numOfPeople = parseFloat(numOfPeopleInput.value);
  
      if (isNaN(bill) || bill <= 0 || isNaN(numOfPeople) || numOfPeople <= 0) {
        alert('Please enter valid bill amount and number of people.');
        return;
      }
  
      const { tipAmount, totalAmount, amountPerPerson } = calculateTip(bill, tipPercentage, numOfPeople);
      updateResults(tipAmount, totalAmount);
    }
  
    function handleCustomTipInput() {
      const customTip = parseFloat(customTipInput.value);
  
      if (isNaN(customTip) || customTip < 0) {
        alert('Please enter a valid custom tip percentage.');
        return;
      }
  
      handleTipButtonClick(customTip);
    }
  
    function handleResetButtonClick() {
      resetValues();
    }
  
    tipButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tipPercentage = parseFloat(button.textContent);
        handleTipButtonClick(tipPercentage);
      });
    });
  
    customTipInput.addEventListener('input', handleCustomTipInput);
    resetBtn.addEventListener('click', handleResetButtonClick);
  });
  

















