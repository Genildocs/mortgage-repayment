import "./style.css";
import {
  form,
  inputFormat,
  validateForm,
  errorDisplay,
  calculateRepayments,
} from "./modules/index.js";
import image_1 from './assets/images/illustration-empty.svg'
document.querySelector("#app").innerHTML = `
  <div class="bg-white sm:rounded-md md:rounded-2xl md:flex  md:w-[800px] md:h-[500px] ">
    ${form}
    <div class=" p-4 mt-4 md:mt-0 bg-slate-800 md:flex-1 md:flex items-center md:rounded-br-2xl md:rounded-tr-2xl md:b-radius-content-result ">     
    <div class="block" id="empty">
      <div class="flex justify-center ">
        <img src=${image_1} alt="image calculate">
      </div>
      <div class="text-center">
        <h1 class="mb-2 font-bold text-2xl text-white">Results show here</h1>
        <p class="text-slate-300">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    </div>

    <div class=" hidden  md:self-start md:p-3" id="completed">
      <div>
        <h1 class="mb-2 font-bold text-2xl md:text-[1rem] text-white">Your results</h1>
        <p class="mb-3 md:mb-[2rem] text-sm text-slate-300">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      </div>
      <div class="p-3 md:p-6 rounded-md b-yelow ">
        <div class="py-2">
          <p class="text-slate-300 md:text-sm">Your monthly repayment</p>
          <p id="monthValue" class="font-bold text-2xl md:text-3xl pt-3 text-lime">£ 0.00</p>          
        </div>
        <hr>        
        <div class="py-2">
          <p class="text-slate-300 md:text-sm">Total you'll repay over the term</p>
          <p id="totValue" class="font-bold text-2xl md:text-3xl pt-3 text-white">£ 0.00</p>          
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
const classFieldSet = document.querySelectorAll(".fildeset-inputs");

inputFormat(formsElements);
function main(event) {
  event.preventDefault();
  const { error, value } = validateForm(
    amount,
    term,
    rate,
    repayment,
    interest
  );

  if (!error) {
    calculateRepayments(value);
  }

  errorDisplay(error, value, classFieldSet);
}

const btnSubmit = document.getElementById("calculate-repayments");
btnSubmit.addEventListener("click", main);
