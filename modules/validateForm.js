const validateForm = (elementButton, formElement) => {
  if (elementButton) {
    elementButton.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
};

export { validateForm };
