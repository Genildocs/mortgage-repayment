import './style.css';
import { form } from './js/form.js';

document.querySelector('#app').innerHTML = `
  <div>
    ${form}
  </div>
`;
