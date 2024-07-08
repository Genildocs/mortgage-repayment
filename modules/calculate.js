function calculate(value) {
  const displayValue = document.getElementById('monthValue');
  const displayTotValue = document.getElementById('totValue');
  const displayCalculate = document.getElementById('completed');
  const empty = document.getElementById('empty');
  let monthlyRepayment;
  let totalRepayment;
  const years = value.term * 12;
  const ratePerMonth = value.rate / 100 / 12;

  if (value.repayment) {
    monthlyRepayment =
      (value.amount * (ratePerMonth * Math.pow(1 + ratePerMonth, years))) /
      (Math.pow(1 + ratePerMonth, years) - 1);
    totalRepayment = monthlyRepayment * years;
    displayValue.textContent = `£${monthlyRepayment.toLocaleString('en-US')}`;
    displayTotValue.textContent = `£${totalRepayment.toLocaleString('en-US')}`;
    displayCalculate.style.display = 'block';
    empty.style.display = 'none';
  } else {
    monthlyRepayment = (value.amount * (ratePerMonth / 100)) / 12;
    totalRepayment = value.amount + monthlyRepayment * years;
    displayValue.textContent = `£${monthlyRepayment.toLocaleString('en-US')}`;
    displayTotValue.textContent = `£${totalRepayment.toLocaleString('en-US')}`;
    displayCalculate.style.display = 'block';
    empty.style.display = 'none';
  }
}

function displayCalculate() {}

export { calculate };
