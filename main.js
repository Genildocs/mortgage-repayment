import './style.css';
import { form } from './modules/form.js';
import { inputFormat } from './modules/inputFormat.js';
import Joi, { func } from 'joi';

document.querySelector('#app').innerHTML = `
  <div>
    ${form}
    <div class="px-4 mt-4 bg-slate-500">
      <h1>Your results</h1>
      <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div>
        <div>
          <p>Your monthly repayment</p>
          <span>$ 1,797.74</span>          
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

//buttons
const btnSubmit = document.getElementById('calculate-repayments');
inputFormat(formsElements);
// functions
function errorDisplay(erroForm, valueValidate) {
  const elementsForm = ['amount', 'term', 'rate'];

  elementsForm.forEach((el) => {
    const erroInput = document.getElementById(`${el}-error`);
    if (erroForm && erroForm.details.find((e) => e.context.key === el)) {
      erroInput.textContent = erroForm.details[0].message;
    } else {
      erroInput.textContent = '';
    }
  });

  const erroRadioInput = document.getElementById('radio-error');
  if (!valueValidate.repayment && !valueValidate.interest) {
    erroRadioInput.textContent = 'This field is required';
  } else {
    erroRadioInput.textContent = '';
  }
}

function validateForm() {
  const schema = Joi.object({
    amount: Joi.number().min(1).required(),
    term: Joi.number().min(1).max(50).required(),
    rate: Joi.number().required(),
    repayment: Joi.required(),
    interest: Joi.required(),
  });

  const { error, value } = schema.validate({
    amount: parseFloat(amount.value),
    term: parseFloat(term.value),
    rate: parseFloat(rate.value),
    repayment: repayment.checked,
    interest: interest.checked,
  });

  return { error, value };
}

function calculteRepayments(event) {
  event.preventDefault();
  const { error, value } = validateForm();

  if (!error) {
    console.log('vamos calcular');
  }

  errorDisplay(error, value);
}

btnSubmit.addEventListener('click', calculteRepayments);
