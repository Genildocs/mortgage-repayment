function calculateRepayments(value) {

  let monthlyRepayment;
  let totalRepayment;
  const years = value.term * 12;
  const ratePerMonth = value.rate / 100 / 12;

  if (value.repayment) {
    monthlyRepayment =
      (value.amount * (ratePerMonth * Math.pow(1 + ratePerMonth, years))) /
      (Math.pow(1 + ratePerMonth, years) - 1);
    totalRepayment = monthlyRepayment * years;
    contentValue(monthlyRepayment, totalRepayment)
    handleToogle()

  }else{
    if (value.interest){
      monthlyRepayment = (value.amount * (ratePerMonth / 100)) / 12;
      totalRepayment = value.amount + monthlyRepayment * years;

      contentValue(monthlyRepayment, totalRepayment)
      handleToogle()
    }
  }


}


function contentValue(monthlyValue, totValue){
  const displayValue = document.getElementById('monthValue');
  const displayTotValue = document.getElementById('totValue');

  displayValue.textContent = `$${monthlyValue.toLocaleString('en-US')}`;
  displayTotValue.textContent = `$${totValue.toLocaleString('en-US')}`;
}
function handleToogle() {
  const displayCalculate = document.getElementById('completed');
  const empty = document.getElementById('empty');

  displayCalculate.style.display = 'block';
  empty.style.display = 'none';
}

export { calculateRepayments };
