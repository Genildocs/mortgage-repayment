//
import {validateForm} from "./validateForm.js";

const formatNumber = (value) => {
  const number = parseFloat(value.replace(/,/g, ''));
  return isNaN(number) ? '' : number.toLocaleString('en-US');
};


function handlerInput(event) {

  const target = event.target;
  if (target.name === 'amount') {
    target.value = formatNumber(target.value)
  };
}


function inputFormat(formElement) {

  for (let item of formElement) {
    if (item.type === 'text') {
    item.addEventListener('input', handlerInput);
    }
  }

}

export { inputFormat, formatNumber };
//
