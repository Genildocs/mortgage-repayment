function calculateRepayments(
  btnElement,
  validateForm,
  formsElement,
  amountError
) {
  btnElement.addEventListener('click', (event) => {
    event.preventDefault();
    const error = validateForm(formsElement);
  });
}

export { calculateRepayments };
