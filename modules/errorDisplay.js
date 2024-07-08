function errorDisplay(erroForm, valueValidate, element) {
  const elementsForm = ['amount', 'term', 'rate'];

  elementsForm.forEach((el,idx) => {
    const erroInput = document.getElementById(`${el}-error`);
    if (erroForm && erroForm.details.find((e) => e.context.key === el)) {
      erroInput.textContent = erroForm.details[0].message;
      element[idx].classList.add('i-invalid');
    } else {
      erroInput.textContent = '';
      element[idx].classList.remove('i-invalid');
    }
  });

  const erroRadioInput = document.getElementById('radio-error');
  if (!valueValidate.repayment && !valueValidate.interest) {
    erroRadioInput.textContent = 'This field is required';
  } else {
    erroRadioInput.textContent = '';
  }
}

export { errorDisplay };
