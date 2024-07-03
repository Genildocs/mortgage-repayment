import './style.css';
import { form, calculateRepayments, validateForm } from './modules/index.js';

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
const btnSubmit = document.getElementById('calculate-repayments');

// functions
calculateRepayments(btnSubmit, validateForm, formsElements);
