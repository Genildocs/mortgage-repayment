import Joi from 'joi';

function validateForm(formElements) {
  const { amount, term, rate } = formElements;

  const schema = Joi.object({
    amount: Joi.number().min(1).required(),
    term: Joi.number().min(1).max(30).required(),
    rate: Joi.number().min(1).max(100).required(),
  });

  const { error } = schema.validate({
    amount: parseFloat(amount.value),
    term: parseFloat(term.value),
    rate: parseFloat(rate.value),
  });

  return error;
}

export { validateForm };
