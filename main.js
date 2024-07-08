import './style.css';
import {
  form,
  inputFormat,
  validateForm,
  errorDisplay

} from './modules/index.js';
document.querySelector('#app').innerHTML = `
  <div>
    ${form}
    <div class="p-4 mt-4 bg-slate-800">
    <div class="hidden">
        <div class="flex justify-center">
            <img src="./assets/images/illustration-empty.svg"> 
        </div>
        <div class="text-center">   
            <h1 class="mb-2 font-bold text-2xl text-white">Results show here</h1>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    </div>
    <div >
      <div>
        <h1 class="mb-2 font-bold text-2xl text-white">Your results</h1>
        <p class="mb-2 text-slate-300">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      </div>
      <div class="bg-slate-900 p-3 rounded-md">
        <div class="py-2">
          <p class="text-slate-300">Your monthly repayment</p>
          <p id="monthValue" class="font-bold text-2xl pt-3 text-lime">£ 0.00</p>          
        </div>
        <hr>        
        <div class="py-2">
          <p class="text-slate-300">Total you'll repay over the term</p>
          <p id="totValue" class="font-bold text-2xl pt-3 text-white">£ 0.00</p>          
        </div>
      </div>
    </div>
    </div>    
  </div>  
`;
const forms = document.forms[0];
const formsElements = forms.elements;
const { amount, term, rate } = formsElements;
const repayment = formsElements.mortgage[0];
const interest = formsElements.mortgage[1];
const displayValue = document.getElementById('monthValue')
const displayTotValue = document.getElementById('totValue')
const classFieldSet = document.querySelectorAll('.fildeset-inputs');
inputFormat(formsElements);

function calculteRepayments(event) {
  event.preventDefault();
  const { error, value } = validateForm(
    amount,
    term,
    rate,
    repayment,
    interest
  );
  if (!error) {
    calculate(value);
  }

  errorDisplay(error, value, classFieldSet);
}

function calculate(radioOption) {
  const amountValue = parseInt(amount.value);
  const years = term.value * 12;
  const ratePerMonth = parseFloat(rate.value) / 100 / 12;
  console.log(amountValue, ratePerMonth)
  let monthlyRepayment;
  let totalRepayment
  if (radioOption.repayment) {
    monthlyRepayment =
        (amountValue * (ratePerMonth * Math.pow(1 + ratePerMonth, years))) /
        (Math.pow(1 + ratePerMonth, years) - 1);
    totalRepayment = monthlyRepayment * years;

    displayValue.textContent = `£${monthlyRepayment.toLocaleString('en-US')}`;
    displayTotValue.textContent = `£${totalRepayment.toLocaleString('en-US')}`;
  } else {
    monthlyRepayment = (amount * (interest / 100)) / 12;
    totalRepayment = amount + (monthlyRepayment * term * 12);
    displayValue.textContent = `£${monthlyRepayment.toLocaleString('en-US')}`;
    displayTotValue.textContent = `£${totalRepayment.toLocaleString('en-US')}`;
  }
}
const btnSubmit = document.getElementById('calculate-repayments');
btnSubmit.addEventListener('click', calculteRepayments);
